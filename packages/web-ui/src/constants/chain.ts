export const enum MAIN_NETS {
    ETHER = 1,
    LOCAL_TEST = 1337
}

export const CHAIN_NAMES = {
    [MAIN_NETS.ETHER]: 'Ethereum',
    [MAIN_NETS.LOCAL_TEST]: 'Localhost'
}

const CHAIN_INFO_MAP = {
    [MAIN_NETS.ETHER]: {
        label: 'Ethereum'
    },
    [MAIN_NETS.LOCAL_TEST]: {
        label: 'Localhost'
    }

}

export function getChainInfo(chainId: MAIN_NETS) {
    return CHAIN_INFO_MAP[chainId]
}