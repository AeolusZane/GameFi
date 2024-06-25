
import Toast from '@components/Toast'
import { UnSupportChain } from '@components/UnSupportChain';
import { HeroContractProvider } from '@contract/useHeroContract';
import { useSupportInfo } from '@hook/useSupportInfo';
import { useCurrencyBalanceHook } from '@hook/useCurrencyBalance'
import styled from 'styled-components'
import Hero from './Hero/Hero'
const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
`

export default function Home() {
    useCurrencyBalanceHook();
    const { isSupport } = useSupportInfo();
    return <HomeContainer>
        <Toast />

        {isSupport ?
            (<HeroContractProvider>
                <Hero />
            </HeroContractProvider>)
            : <UnSupportChain />
        }
    </HomeContainer>
}