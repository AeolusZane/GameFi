import { useActivation } from '@provider/Web3Provider'
import { useBalance } from '@hook/useCurrencyBalance'
import { useHeroes, useQueryHeroes } from '@hook/useQueryHeroes'
import { useEffect } from 'react';
import { useBuyHero } from '@hook/useBuyHero';
import Button from '@components/Button';
import { useToast } from '@components/Toast';
import { HeroCard } from '@components/HeroCard'
import { TransferHero } from './TransferHero';
import { useHeroContract } from '@contract/useHeroContract';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
`

const UserInfo = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap:7px;
    margin-bottom: 10px;
`
const Card = styled.div`
    margin-top: 25px;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:12px;
`

function HeroPage() {
    const { tryActivate, tryDeactivate, isActive } = useActivation();
    const { account } = useWeb3React();
    const { balance } = useBalance();
    const { heroes } = useHeroes();
    const heroContract = useHeroContract();
    const { queryHeroes } = useQueryHeroes();
    const { buyHero, transactionHash } = useBuyHero();
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
            <UserInfo>
                <div>
                    address: {account}
                </div>
                <div>
                    balance: {balance} ETH
                </div>
            </UserInfo>
            <HeroContainer>
                {heroes.map((h, i) => {
                    return <HeroCard key={i} h={h} heroContract={heroContract} />
                })}
            </HeroContainer>
            <Card>
                <Button onClick={toggleActivate}>
                    {isActive ? '断开连接' : '连接钱包'}
                </Button>
                <Button onClick={buyHero}>
                    购买英雄
                </Button>
                <Button onClick={queryHeroes}>
                    查看英雄
                </Button>
            </Card>
            <TransferHero />
        </>
    )
}

export default HeroPage
