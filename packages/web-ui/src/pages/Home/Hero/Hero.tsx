import { useActivation } from '@components/Web3Provider'
import { useCurrencyBalance } from '@hook/useCurrencyBalance'
import { useQueryHeroes } from '@hook/useQueryHeroes'
import type { HeroDetailType } from '@hook/useQueryHeroes'
import { useEffect } from 'react';
import { useBuyHero } from '@hook/useBuyHero';
import Button from '@components/Button';
import { useToast } from '@components/Toast';
import { initHeroContract } from '@hook/Contract/useHeroContract'
import './hero.css'
import { TransferHero } from './TransferHero';

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
    const { tryActivate, tryDeactivate, isActive } = useActivation();
    const { account, balance } = useCurrencyBalance();
    const { queryHeroes, heroes } = useQueryHeroes();
    const { buyHero, transactionHash } = useBuyHero();
    const { show } = useToast()
    initHeroContract();

    useEffect(() => {
        if (transactionHash) {
            show(transactionHash)
        }
    }, [transactionHash])

    const toggleActivate = async () => {
        if (isActive) {
            await tryDeactivate()
        } else {
            await tryActivate()
        }
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
            <div className='hero-container'>
                {heroes.map((h, i) => {
                    return <HeroCard key={i} {...h} />
                })}
            </div>
            <div className="card">
                <Button onClick={toggleActivate}>
                    {isActive ? '断开连接' : '连接钱包'}
                </Button>
                <Button onClick={buyHero}>
                    购买英雄
                </Button>
                <Button onClick={queryHeroes}>
                    查看英雄
                </Button>
            </div >
            <TransferHero />
        </>
    )
}

export default HeroPage
