import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts"
import { BigNumber } from '@ethersproject/bignumber'
import log, { LogLevel } from '@log';
import { useHeroContract } from '@contract/useHeroContract'
import { useEffect } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'

const heroesAtom = atom<bigint[]>([]);
const heroesRawDataAtom = atom<HeroRawDataType[]>([]);

type HeroRawDataType = BigNumber

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
      return HeroName.Mage;
  }
}

export function useHeroes() {
  const heroes = useAtomValue(heroesAtom);
  const heroesRawData = useAtomValue(heroesRawDataAtom);

  return { heroes, heroesRawData }
}


export const getAttr = async (h: bigint, contract: Contract) => {
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

async function bigintHeroesToDetail(heroes: bigint[], contract: Contract): Promise<HeroDetailType[]> {
  const heroDetails = await Promise.all(heroes.map((h: any) => getAttr(h, contract)));
  return heroDetails;
}

export function useQueryHeroes() {
  const { provider, account, chainId } = useWeb3React();
  const [heroes, setHeroes] = useAtom<bigint[]>(heroesAtom);
  const [heroesRawData, setHeroesRawData] = useAtom<HeroRawDataType[]>(heroesRawDataAtom);
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
      }) as HeroRawDataType[][];
      const heroes = res[0].map((B: HeroRawDataType) => B.toBigInt());
      setHeroes(heroes);
      setHeroesRawData(res[0]);
    } catch (e) {
      log(`you may switch to a chain doesn't have the contract deployed`, LogLevel.WARN)
      setHeroes([]);
    }
  }

  return { queryHeroes, heroes, heroesRawData }
}