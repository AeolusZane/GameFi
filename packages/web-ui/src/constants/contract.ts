import { MAIN_NETS } from './chain'

export const CONTRACT_ADDRESS_LIST = [
    {
        chainId: MAIN_NETS.ETHER,
        address: process.env.ETHER_CONTRACT_ADDRESS, // 暂没部署
    }, {
        chainId: MAIN_NETS.LOCAL_TEST,
        address: process.env.DEV_CONTRACT_ADDRESS,
    }, {
        chainId: MAIN_NETS.ALCHEMY,
        address: process.env.ALCHEMY_CONTRACT_ADDRESS,
    }
]