import { useWeb3React } from '@web3-react/core'
import { useHeroContract } from '@contract/useHeroContract'
import { useToast } from '@components/Toast'
import Web3 from 'web3';
import { atom, useAtom } from 'jotai';
const transactionHashAtom = atom<string | null>(null);

export function useBuyHero() {
    const { account, provider } = useWeb3React();
    const [transactionHash, setTransactionHash] = useAtom<string | null>(transactionHashAtom);
    const { show } = useToast();
    const heroContract = useHeroContract();

    const buyHero = async () => {
        if (!account || !provider || !heroContract) {
            return;
        }
        const contract = heroContract;
        try {
            const res = await contract.functions.createHero(0, {
                value: Web3.utils.toWei('0.0012', 'ether'),
            });
            await res.wait(); // 改成emit事件更合适

            setTransactionHash(res.hash);
        } catch (e) {
            const err = e as Error;
            err.name;
            if (err.message.includes('insufficient funds')) {
                show({
                    title: 'Transaction Failed!',
                    text: 'Insufficient funds',
                    type: 'warn'
                });
            }
        }
    }

    return { buyHero, transactionHash }
}