export const enum MAIN_NETS {
    ETHER = 1,
    LOCAL_TEST = 31337,
    ALCHEMY = 11155111,
}

export const SupportChains = [MAIN_NETS.ETHER, MAIN_NETS.LOCAL_TEST, MAIN_NETS.ALCHEMY]

export const CHAIN_NAMES = {
    [MAIN_NETS.ETHER]: 'Ethereum',
    [MAIN_NETS.LOCAL_TEST]: 'Localhost',
    [MAIN_NETS.ALCHEMY]: 'Sepolia'
}

export const PUBLIC_RPC_URLS = {
    [MAIN_NETS.ETHER]: ['https://mainnet.infura.io/v3/'],
    [MAIN_NETS.LOCAL_TEST]: ['http://localhost:8545'],
    [MAIN_NETS.ALCHEMY]: ['']

}
const CHAIN_INFO_MAP = {
    [MAIN_NETS.ETHER]: {
        label: CHAIN_NAMES[MAIN_NETS.ETHER],
        chainId: MAIN_NETS.ETHER,
        name: 'Ethereum',
        rpcUrl: 'https://mainnet.infura.io/v3/',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    },
    [MAIN_NETS.LOCAL_TEST]: {
        label: CHAIN_NAMES[MAIN_NETS.LOCAL_TEST],
        chainId: MAIN_NETS.LOCAL_TEST,
        name: CHAIN_NAMES[MAIN_NETS.LOCAL_TEST],
        rpcUrl: 'http://localhost:8545',
        nativeCurrency: { name: 'Local Ether', symbol: 'ETH', decimals: 18 },
    },
    [MAIN_NETS.ALCHEMY]: {
        label: CHAIN_NAMES[MAIN_NETS.ALCHEMY],
        chainId: MAIN_NETS.ALCHEMY,
        name: CHAIN_NAMES[MAIN_NETS.ALCHEMY],
        rpcUrl: '',
        nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
        // get rpcUrl on alchemy
    }

}

export function getChainInfo(chainId: MAIN_NETS) {
    return CHAIN_INFO_MAP[chainId]
}