import NavBar from '@components/NavBar'
import Home from './pages/Home'
import { Earth } from '@components/Earth'
import './App.css'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #f0f2f5aa;
    border: 1px solid #f0f2f5;
    border-radius: 10px;
    padding: 10px 5px;
`

function App() {
  return (
    <Container>
      <NavBar />
      <Home />
      <Earth />
    </Container>
  )
}

export default App
