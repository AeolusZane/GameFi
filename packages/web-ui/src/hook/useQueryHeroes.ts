import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts"
import { BigNumber } from '@ethersproject/bignumber'
import { useEffect } from 'react'
import { useHeroContract } from './useHeroContract'
import { atom, useAtom, useAtomValue } from 'jotai'
import log, { LogLevel } from '@log';

const heroesAtom = atom<HeroDetailType[]>([]);
const heroesRawDataAtom = atom<any[]>([]);

export const enum HeroName {
  Mage = "法师",
  Healer = "治疗师",
  Barbarian = "野蛮人",
}

export type HeroDetailType = {
  name: HeroName,
  magic: number,
  strength: number,
  intellect: number,
  dex: number,
  health: number,
}

const enum HeroType {
  Mage,
  Healer,
  Barbarian,
}

function getHeroName(type: number) {
  switch (type) {
    case HeroType.Mage:
      return HeroName.Mage;
    case HeroType.Healer:
      return HeroName.Healer;
    case HeroType.Barbarian:
      return HeroName.Barbarian;
    default:
  }
}

export function useHeroes() {
  const heroes = useAtomValue(heroesAtom);
  const heroesRawData = useAtomValue(heroesRawDataAtom);

  return { heroes, heroesRawData }
}


export function useQueryHeroes() {
  const { provider, account, chainId } = useWeb3React();
  const [heroes, setHeroes] = useAtom<HeroDetailType[]>(heroesAtom);
  const [heroesRawData, setHeroesRawData] = useAtom<any[]>(heroesRawDataAtom);
  const heroContract = useHeroContract();

  useEffect(() => {
    queryHeroes();
  }, [provider, account, chainId, heroContract])

  const queryHeroes = async () => {
    if (!provider || !heroContract) {
      return;
    }
    try {
      const contract = heroContract;
      const res = await contract.functions.getHeroes({
        from: account
      });
      const heroes = res[0].map((B: BigNumber) => B.toBigInt());
      const heroDetails = await Promise.all(heroes.map((h: any) => getAttr(h, contract)));
      setHeroes(heroDetails);
      setHeroesRawData(res[0]);
    } catch (e) {
      log(`you may switch to a chain doesn't have the contract deployed`, LogLevel.WARN)
      setHeroes([]);
    }
  }

  const getAttr = async (h: any, contract: Contract) => {
    const methods = contract.functions
    const index = Number((h & 0x3n));
    const name = getHeroName(index);

    const magic = (await methods.getMagic(h))[0]
    const strength = (await methods.getStrength(h))[0]
    const intellect = (await methods.getIntellect(h))[0]
    const dex = (await methods.getDex(h))[0]
    const health = (await methods.getHealth(h))[0]
    return {
      name,
      magic,
      strength,
      intellect,
      dex,
      health
    }
  }

  return { queryHeroes, heroes, heroesRawData }
}