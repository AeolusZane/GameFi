import { useWeb3React } from '@web3-react/core'
import { useHeroContract } from '@contract/useHeroContract'
import Web3 from 'web3';
import { atom, useAtom } from 'jotai';
const transactionHashAtom = atom<string | null>(null);

export function useBuyHero() {
    const { account, provider } = useWeb3React();
    const [transactionHash, setTransactionHash] = useAtom<string | null>(transactionHashAtom);
    const heroContract = useHeroContract();

    const buyHero = async () => {
        if (!account || !provider || !heroContract) {
            return;
        }
        const contract = heroContract;
        const res = await contract.functions.createHero(0, {
            value: Web3.utils.toWei('0.0012', 'ether'),
        });
        await res.wait(); // 改成emit事件更合适

        setTransactionHash(res.hash);
    }

    return { buyHero, transactionHash }
}