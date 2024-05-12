export const enum MAIN_NETS {
    ETHER = 1,
    LOCAL_TEST = 1337,
    ALCHEMY = 11155111,
}

export const SupportChains = [MAIN_NETS.ETHER, MAIN_NETS.LOCAL_TEST, MAIN_NETS.ALCHEMY]

export const CHAIN_NAMES = {
    [MAIN_NETS.ETHER]: 'Ethereum',
    [MAIN_NETS.LOCAL_TEST]: 'Localhost',
    [MAIN_NETS.ALCHEMY]: 'Sepolia'
}

const CHAIN_INFO_MAP = {
    [MAIN_NETS.ETHER]: {
        label: CHAIN_NAMES[MAIN_NETS.ETHER]
    },
    [MAIN_NETS.LOCAL_TEST]: {
        label: CHAIN_NAMES[MAIN_NETS.LOCAL_TEST]
    },
    [MAIN_NETS.ALCHEMY]: {
        label: CHAIN_NAMES[MAIN_NETS.ALCHEMY]
    }

}

export function getChainInfo(chainId: MAIN_NETS) {
    return CHAIN_INFO_MAP[chainId]
}