

import { useTransferHero } from '@hook/useTransferHero'
import { useHeroes } from '@hook/useQueryHeroes'
import { useWeb3React } from '@web3-react/core';
import Button from '@components/Button';
import { BigNumber } from '@ethersproject/bignumber';

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

export function TransferHero() {
    const { heroesRawData } = useHeroes();
    const { account } = useWeb3React();
    const { transferHero } = useTransferHero();

    return <div>
        <HeroesData />
        <div>
            {`transfer ${heroesRawData[0]} from: ${account} to ${TO}`}
        </div>
        <Button onClick={() => {
            transferHero(heroesRawData[0], TO)
        }}>
            transferHeroTo
        </Button>
    </div>
}