import { Contract } from '@ethersproject/contracts';
import { useEffect, createContext } from 'react';
import { BigNumber } from '@ethersproject/bignumber'
import { atom, useAtom, useAtomValue } from 'jotai';
import { useWeb3React } from '@web3-react/core';
import { CONTRACT_ADDRESS } from '@constants/contract';
import Hero from '../../../contract/artifacts/contracts/Hero.sol/Hero.json'
import { useQueryHeroes } from './useQueryHeroes';
import { ReactNode } from 'react';

const heroContractAtom = atom<Contract | null>(null);
const HeroContractContext = createContext<Contract | null>(null);

/**
 * 该钩子用于监听合约事件
 */
function useHeroesContractEvent() {
    const heroContract = useAtomValue(heroContractAtom);
    const { queryHeroes } = useQueryHeroes();

    useEffect(() => {
        if (!heroContract) {
            return;
        }
        queryHeroes();
        const heroTransferEventCallback = (from: string, to: string, hero: BigNumber) => {
            console.log(from, to, hero)
            queryHeroes();
        };
        // when heroContract is ready, we can listen to the event
        if (heroContract) {
            heroContract.on("TransferHero", heroTransferEventCallback);
        }

        return () => {
            if (heroContract) {
                heroContract.off("TransferHero", heroTransferEventCallback);
            }
        }
    }, [heroContract])
}
/**
 * 该钩子作为初始化合约的钩子，用于初始化合约
 */
function initHeroContract() {
    const { provider, chainId } = useWeb3React();
    const [, setHeroContract] = useAtom<Contract | null>(heroContractAtom);
    useEffect(() => {
        if (!provider || !chainId) {
            return;
        }
        const signer = provider.getSigner();
        const contract = new Contract(CONTRACT_ADDRESS, Hero.abi, signer);
        setHeroContract(contract);
    }, [provider, chainId, setHeroContract])
}

export function HeroContractProvider({ children }: { children: ReactNode }) {
    initHeroContract();
    useHeroesContractEvent();
    return <HeroContractContext.Provider value={null}>
        {children}
    </HeroContractContext.Provider>
}

export function useHeroContract() {
    const heroContract = useAtomValue(heroContractAtom);
    return heroContract;
}