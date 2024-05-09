import '../App.css'
import { web3 } from '../core/init';
import Hero from '../../../contract/artifacts/contracts/Hero.sol/Hero.json'
import { getHeroAttr } from '../util/hero'
import { useEffect, useState } from 'react';
import { useActivation } from '../components/Web3Provider'
import { useCurrencyBalance } from '../hook/useCurrencyBalance'
import './hero.css'

const CONTRACT_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
const enum HeroName {
    Mage = "法师",
    Healer = "治疗师",
    Barbarian = "野蛮人",
}

type HeroType = {
    class?: HeroName,
    magic: number,
    strength: number,
    intellect: number,
    dex: number,
    health: number,
}

function HeroCard(props: HeroType) {
    return (
        <div className='hero-info'>
            <p>职业: {props.class}</p>
            <p>魔法: {props.magic.toString()}</p>
            <p>力量: {props.strength.toString()}</p>
            <p>智力: {props.intellect.toString()}</p>
            <p>敏捷: {props.dex.toString()}</p>
            <p>生命: {props.health.toString()}</p>
        </div>
    )
}

function HeroPage() {
    const [heroes, setHeroes] = useState<HeroType[]>([]);
    const { tryActivate } = useActivation();
    const { account, balance } = useCurrencyBalance();

    useEffect(() => {
        checkHeroes()
    }, [heroes.length])

    async function checkHeroes() {
        const contract = new web3.eth.Contract(Hero.abi,
            CONTRACT_ADDRESS
        )
        // 传参数
        const heroes = await contract.methods.getHeroes().call({
            from: (await web3.eth.getAccounts())[0],
        });
        let heroList = []
        Promise.all(heroes.map((h: any) => getHeroAttr(contract, h))).then((attr: HeroType[]) => {
            heroList = attr;
            setHeroes([...heroList])
        })
    }

    async function purchaseHero() {
        const contract = new web3.eth.Contract(Hero.abi,
            CONTRACT_ADDRESS
        )
        // 传参数
        contract.methods.createHero(0).send({
            from: (await web3.eth.getAccounts())[0],
            value: web3.utils.toWei('0.06', 'ether'),
        })
    }

    return (
        <>
            <div className="user-info">
                <div>
                    address: {account}
                </div>
                <div>
                    balance: {balance} ETH
                </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }} className='hero-container'>
                {heroes.map((h, i) => {
                    return <HeroCard key={i} {...h} />
                })}
            </div>
            <div className="card">
                <button onClick={() => {
                    tryActivate()
                }}>
                    连接钱包
                </button>
                <button onClick={purchaseHero}>
                    购买英雄
                </button>
                <button onClick={checkHeroes}>
                    查看英雄
                </button>
            </div>
        </>
    )
}

export default HeroPage
