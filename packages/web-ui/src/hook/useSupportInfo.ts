import { SupportChains } from "@constants/chain";
import { initActivation } from '@provider/Web3Provider'
import { useWeb3React } from "@web3-react/core";

/**
 * 检查该链是否支持
 */

export function useSupportInfo() {
    const {
        chainId
    } = useWeb3React();
    initActivation();
    const isSupport = SupportChains.includes(Number(chainId));
    return {
        isSupport
    };
}