import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts';
import { CONTRACT_ADDRESS } from '../constants/contract';
import { useState } from 'react';
import Web3 from 'web3';
import Hero from '../../../contract/artifacts/contracts/Hero.sol/Hero.json'


export function useBuyHero() {
    const { account, provider } = useWeb3React();
    const [transactionHash, setTransactionHash] = useState<string | null>(null);

    const buyHero = async () => {
        if (!account || !provider) {
            return;
        }
        const contract = new Contract(CONTRACT_ADDRESS, Hero.abi, provider?.getSigner());
        const res = await contract.functions.createHero(0, {
            value: Web3.utils.toWei('0.05', 'ether')
        });

        setTransactionHash(res.hash);
    }

    return { buyHero, transactionHash }
}