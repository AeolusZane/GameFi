import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import Web3 from 'web3';


export function useCurrencyBalance() {
    const { accounts, provider } = useWeb3React();
    const [balance, setBalance] = useState<string | null>('-');

    useEffect(() => {
        if (provider && accounts && accounts.length > 0) {
            provider.getBalance(accounts[0]).then((balance) => {
                setBalance(Web3.utils.fromWei(balance.toString(), 'ether'))
            })
        }
    }, [provider]);

    if (!accounts || accounts.length === 0) {
        console.log('No accounts found')
    }

    return { account: accounts?.[0] || '-', balance }
}