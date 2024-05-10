import { ReactNode, useEffect } from "react";
import { Web3ReactHooks, Web3ReactProvider, initializeConnector, useWeb3React } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import type { Connector } from '@web3-react/types'

const enum ConnectionType {
    INJECTED = 'injected',
    LOCAL_TEST = 'local_test',
}


interface Connection {
    connector: Connector
    hooks: Web3ReactHooks
    type: ConnectionType
}
const onError = (error: Error) => {
    console.error(error, '🐷')
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions, onError }))

export const deprecatedInjectedConnection: Connection = {
    // getProviderInfo: (isDarkMode: boolean) => getDeprecatedInjection(isDarkMode) ?? { name: t`Browser Wallet` },
    connector: web3Injected,
    hooks: web3InjectedHooks,
    type: ConnectionType.INJECTED,
    // shouldDisplay: () => getIsMetaMaskWallet() || getShouldAdvertiseMetaMask() || getIsGenericInjector(),
    // // If on non-injected, non-mobile browser, prompt user to install Metamask
    // overrideActivate: () => {
    //     if (getShouldAdvertiseMetaMask()) {
    //         window.open('https://metamask.io/', 'inst_metamask')
    //         return true
    //     }
    //     return false
    // },
}
const connections = [
    deprecatedInjectedConnection
]

export function useActivation() {
    const { connector } = useWeb3React();

    const tryActivate = async () => {
        try {
            await connector.activate();
        } catch (e) {
            console.error(e)
        }
    }
    return { tryActivate }
}

export default function Web3Provider({ children }: { children: ReactNode }) {
    const connectors = connections.map<[Connector, Web3ReactHooks]>(({ hooks, connector }) => [connector, hooks])
    return <Web3ReactProvider connectors={connectors}>
        {children}
    </Web3ReactProvider>
}