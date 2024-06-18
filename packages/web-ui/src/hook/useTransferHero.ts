import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts';
import { CONTRACT_ADDRESS } from '../constants/contract';
import Hero from '../../../contract/artifacts/contracts/Hero.sol/Hero.json'

export function useTransferHero() {
    const { account, provider } = useWeb3React();

    const transferHero = async (hero: any, address: string) => {
        if (!account || !provider) {
            return;
        }

        if (!hero) {
            console.error('hero is null')
            return;
        }
        const h = hero.toBigInt()
        const contract = new Contract(CONTRACT_ADDRESS, Hero.abi, provider?.getSigner());
        const res = await contract.functions.transferHero(h, address);
        await res.wait(); // 改成emit事件更合适
    }

    return { transferHero }
}