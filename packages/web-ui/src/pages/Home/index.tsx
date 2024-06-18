import Hero from './Hero/Hero'
import NavBar from '@components/NavBar'
import ToastDemo from '../../components/Toast'
import { HeroContractProvider } from '@hook/useHeroContract'
export default function Home() {
    return <div>
        <NavBar />
        <ToastDemo />
        <HeroContractProvider>
            <Hero />
        </HeroContractProvider>
    </div>
}