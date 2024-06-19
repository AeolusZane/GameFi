

import { useTransferHero } from '@hook/useTransferHero'
import { useHeroes } from '@hook/useQueryHeroes'
import { useWeb3React } from '@web3-react/core';
import Button from '@components/Button';
import { BigNumber } from '@ethersproject/bignumber';
import { Input } from 'tamagui';
import styled from 'styled-components';
import { useState, useTransition } from 'react';

const FROM = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
const TO = '0xE4D4D36a06C1A3B775F44cDA4C9b570111d6A5cB'

function HeroesData() {
    const { heroesRawData } = useHeroes();

    const dataList = heroesRawData.map((h: BigNumber, index) => {
        return <div
            key={index}
            style={{
                border: '1px solid black',
                margin: '10px',
                padding: '10px',
                textAlign: 'left',
            }}
        >Hero data: {h.toBigInt().toString()}</div>;
    })

    return <div>
        {dataList}
    </div>
}

const TransferContainer = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
`

const TransferDescription = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
`
const TransferHeader = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`
const FromItem = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

const FormLabel = styled.span`
    font-weight: bold;
    min-width: 100px;
    `

const FormItemWrapper = ({ label, children }: { label: string, children: React.ReactNode }) => {
    return <FromItem>
        <FormLabel>
            {label}
        </FormLabel>
        {children}
    </FromItem>
}

function Transfer() {
    const { account } = useWeb3React();
    const { transferHero } = useTransferHero();
    const { heroesRawData } = useHeroes();
    const [to, setTo] = useState<string>(TO)
    const [_isPending, startTransition] = useTransition();

    return <TransferContainer>
        <TransferDescription>
            <TransferHeader>
                {`transfer hero: ${heroesRawData[0]}`}
            </TransferHeader>
            <FormItemWrapper label='current:'>
                <Input
                    flexGrow={1}
                    theme={'gray'}
                    placeholder={`${account}`} disabled />
            </FormItemWrapper>

            <FormItemWrapper label='to:'>
                <Input
                    flexGrow={1}
                    theme={'blue'}
                    disabled
                    placeholder={to}
                    onChangeText={(text) => startTransition(() => {
                        setTo(text)
                    })}
                />
            </FormItemWrapper>
        </TransferDescription>
        <Button onClick={() => {
            transferHero(heroesRawData[0], to)
        }}>
            Submit
        </Button>
    </TransferContainer>

}

export function TransferHero() {
    return <>
        <Transfer />
        <HeroesData />
    </>
}