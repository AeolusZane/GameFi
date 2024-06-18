import { SupportChains } from "@constants/chain";
import { useWeb3React } from "@web3-react/core";
import { initActivation } from '@provider/Web3Provider'

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