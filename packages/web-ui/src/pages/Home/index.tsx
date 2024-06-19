import NavBar from '@components/NavBar'
import ToastDemo from '@components/Toast'
import { UnSupportChain } from '@components/UnSupportChain';
import { HeroContractProvider } from '@contract/useHeroContract';
import { useSupportInfo } from '@hook/useSupportInfo';
import { useCurrencyBalanceHook } from '@hook/useCurrencyBalance'
import Hero from './Hero/Hero'


export default function Home() {
    useCurrencyBalanceHook();
    const { isSupport } = useSupportInfo();
    return <div>
        <NavBar />

        <ToastDemo />

        {isSupport ?
            (<HeroContractProvider>
                <Hero />
            </HeroContractProvider>)
            : <UnSupportChain />
        }
    </div>
}