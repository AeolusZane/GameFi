import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import Web3 from 'web3';

export function useCurrencyBalance() {
    const { account, provider, chainId, isActive } = useWeb3React();
    const [balance, setBalance] = useState<string | null>('-');
    useEffect(() => {
        if (provider && account) {
            const getBalance = async () => {
                provider.getBalance(account).then((balance) => {
                    setBalance(Web3.utils.fromWei(balance.toString(), 'ether'))
                })
            }
            provider.on('block', getBalance);
            return () => {
                provider.removeListener('block', getBalance)
            }
        }
        if(!isActive){
            setBalance('-')
        }
    }, [provider, chainId, isActive]);

    if (!account) {
        // console.log('No accounts found')
    }

    return { account: account || '-', balance }
}