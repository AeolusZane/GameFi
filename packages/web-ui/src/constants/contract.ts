
export const CONTRACT_ADDRESS = process.env.NODE_ENV === 'development' ?
    process.env.DEV_CONTRACT_ADDRESS :
    process.env.PRO_CONTRACT_ADDRESS;