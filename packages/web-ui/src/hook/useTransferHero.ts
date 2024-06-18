import { useWeb3React } from '@web3-react/core'
import { useHeroContract } from './useHeroContract';

export function useTransferHero() {
    const { account, provider } = useWeb3React();
    const heroContract = useHeroContract();
    const transferHero = async (hero: any, address: string) => {
        if (!account || !provider || !heroContract) {
            return;
        }

        if (!hero) {
            console.error('hero is null')
            return;
        }
        const h = hero.toBigInt()
        const contract = heroContract
        const res = await contract.functions.transferHero(h, address);
        await res.wait(); // 改成emit事件更合适
    }

    return { transferHero }
}