import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import Web3 from 'web3';

export function useCurrencyBalance() {
    const { account, provider } = useWeb3React();
    const [balance, setBalance] = useState<string | null>('-');
    useEffect(() => {
        if (provider && account) {
            provider.getBalance(account).then((balance) => {
                setBalance(Web3.utils.fromWei(balance.toString(), 'ether'))
            })
        }
    }, [provider]);

    if (!account) {
        // console.log('No accounts found')
    }

    return { account: account || '-', balance }
}