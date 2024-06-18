import { Contract } from '@ethersproject/contracts';
import { useEffect } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useWeb3React } from '@web3-react/core';
import { CONTRACT_ADDRESS } from '@constants/contract';
import Hero from '../../../../contract/artifacts/contracts/Hero.sol/Hero.json'

export const heroContractAtom = atom<Contract | null>(null);

/**
 * 该钩子作为初始化合约的钩子，用于初始化合约
 */
export function initHeroContract() {
    const { provider, chainId } = useWeb3React();
    const [, setHeroContract] = useAtom<Contract | null>(heroContractAtom);
    useEffect(() => {
        if (!provider || !chainId) {
            return;
        }
        const signer = provider.getSigner();
        const contract = new Contract(CONTRACT_ADDRESS, Hero.abi, signer);
        setHeroContract(contract);
    }, [provider, chainId])
}

export function useHeroContract() {
    const heroContract = useAtomValue<Contract | null>(heroContractAtom);
    return { heroContract }
}
