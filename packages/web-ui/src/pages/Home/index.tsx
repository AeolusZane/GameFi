import Hero from './Hero/Hero'
import NavBar from '@components/NavBar'
import ToastDemo from '@components/Toast'
import { UnSupportChain } from '@components/UnSupportChain';
import { HeroContractProvider } from '@hook/useHeroContract';
import { useSupportInfo } from '@hook/useSupportInfo';


export default function Home() {
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