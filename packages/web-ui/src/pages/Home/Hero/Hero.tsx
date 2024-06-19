import { useActivation } from '@provider/Web3Provider'
import { useCurrencyBalance } from '@hook/useCurrencyBalance'
import { useHeroes, useQueryHeroes } from '@hook/useQueryHeroes'
import { useEffect } from 'react';
import { useBuyHero } from '@hook/useBuyHero';
import Button from '@components/Button';
import { useToast } from '@components/Toast';
import { HeroCard } from '@components/HeroCard'
import './hero.css'
import { TransferHero } from './TransferHero';
import { useHeroContract } from '@hook/useHeroContract';

function HeroPage() {
    const { tryActivate, tryDeactivate, isActive } = useActivation();
    const { account, balance } = useCurrencyBalance();
    const { heroes } = useHeroes();
    const { queryHeroes } = useQueryHeroes();
    const { buyHero, transactionHash } = useBuyHero();
    const heroContract = useHeroContract();
    const { show } = useToast();

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
                    return <HeroCard key={i} h={h} heroContract={heroContract} />
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
