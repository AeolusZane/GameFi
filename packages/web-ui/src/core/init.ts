import Web3 from "web3";
function getEth(): any {
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        console.error('No ethereum provider found')
        return
    }
    return eth
}

async function hasAccounts() {
    const eth = getEth()
    const accounts = await eth.request({ method: 'eth_accounts' });
    return accounts.length > 0
}

async function requestAccounts() {
    const eth = getEth()
    const accounts = await eth.request({ method: 'eth_requestAccounts' });

    return accounts.length > 0
}

export const init = newWeb3();
export let web3: any;
export function newWeb3() {
    return async function () {
        if (web3) {
            console.log('钱包已连接'); // 只创建一次
            return;
        }
        await (async function () {
            web3 = new Web3(getEth());
            if (await requestAccounts() && await hasAccounts()) {
                console.log('Accounts found')
                console.log('Web3 version:', Web3.version)
                console.log('Web3 provider is:', web3.currentProvider)
            } else {
                console.error('No accounts found')
            }
        })()
        return web3
    }
}