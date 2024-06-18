import { useWeb3React } from "@web3-react/core";
import { getChainInfo, PUBLIC_RPC_URLS, MAIN_NETS } from "@constants/chain";

export function useSelectChain() {
    const { connector } = useWeb3React();

    const switchChain = async (chainId: MAIN_NETS) => {
        const chainInfo = getChainInfo(chainId);
        const addChainParameter = {
            chainId: chainInfo.chainId,
            chainName: chainInfo.name,
            rpcUrls: [PUBLIC_RPC_URLS[chainId][0]],
            nativeCurrency: chainInfo.nativeCurrency
        }
        await connector.activate(addChainParameter)
    };

    return switchChain
}