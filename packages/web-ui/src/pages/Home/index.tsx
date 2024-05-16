import Hero from './Hero/Hero'
import NavBar from '@components/NavBar'
import ToastDemo from '../../components/Toast'
export default function Home() {
    return <div>
        <NavBar />
        <ToastDemo />
        <Hero />
    </div>
}