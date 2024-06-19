import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import Web3 from 'web3';
import { atom, useAtom, useAtomValue } from 'jotai';
const balanceAtom = atom<string | null>('-');

export function useBalance() {
    const balance = useAtomValue<string | null>(balanceAtom);
    return { balance }
}

/**
 * initial in the global position
 * just need to call once
 */
export function useCurrencyBalanceHook() {
    const { account, provider, chainId, isActive } = useWeb3React();
    const [_b, setBalance] = useAtom<string | null>(balanceAtom);
    useEffect(() => {
        if (provider && account) {
            const getBalance = async () => {
                provider.getBalance(account).then((balance) => {
                    setBalance(Web3.utils.fromWei(balance.toString(), 'ether'))
                })
            }
            getBalance();
            provider.on('block', getBalance);
            return () => {
                provider.removeListener('block', getBalance)
            }
        }
        if (!isActive) {
            setBalance('-')
        }
    }, [provider, chainId, isActive, account, setBalance]);

    if (!account) {
        // console.log('No accounts found')
    }
}