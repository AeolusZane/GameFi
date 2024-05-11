import { useWeb3React } from "@web3-react/core";

export function useSelectChain() {
    const { connector } = useWeb3React();

    const switchChain = async (chainId: number) => {
        await connector.activate({ chainId });
    };

    return switchChain
}