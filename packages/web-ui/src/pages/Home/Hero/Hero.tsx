import { useActivation } from '@components/Web3Provider'
import { useCurrencyBalance } from '@hook/useCurrencyBalance'
import { useQueryHeroes } from '@hook/useQueryHeroes'
import type { HeroDetailType } from '@hook/useQueryHeroes'
import { useEffect } from 'react';
import { useBuyHero } from '@hook/useBuyHero';
import { useWeb3React } from '@web3-react/core'
import Button from '@components/Button';
import './hero.css'

function HeroCard(props: HeroDetailType) {
    return (
        <div className='hero-info'>
            <p>职业: {props.name}</p>
            <p>魔法: {props.magic.toString()}</p>
            <p>力量: {props.strength.toString()}</p>
            <p>智力: {props.intellect.toString()}</p>
            <p>敏捷: {props.dex.toString()}</p>
            <p>生命: {props.health.toString()}</p>
        </div>
    )
}

function HeroPage() {
    const { tryActivate } = useActivation();
    const { account, balance } = useCurrencyBalance();
    const { queryHeroes, heroes } = useQueryHeroes();
    const { buyHero, transactionHash } = useBuyHero();
    const { chainId } = useWeb3React()

    useEffect(() => {
        queryHeroes() // todo need to use emit event to update
    }, [account, transactionHash, chainId])

    return (
        <>
            <div className="user-info">
                <div>
                    address: {account}
                </div>
                <div>
                    balance: {balance} ETH
                </div>
                {transactionHash ? <div>
                    transaction succeed!! transaction hash~: {transactionHash}
                </div> : null}
            </div>
            <div className='hero-container'>
                {heroes.map((h, i) => {
                    return <HeroCard key={i} {...h} />
                })}
            </div>
            <div className="card">
                <Button onClick={tryActivate}>
                    连接钱包
                </Button>
                <Button onClick={buyHero}>
                    购买英雄
                </Button>
                <Button onClick={queryHeroes}>
                    查看英雄
                </Button>
            </div >
        </>
    )
}

export default HeroPage
