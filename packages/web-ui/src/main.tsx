import '@tamagui/core/reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Web3Provider from './components/Web3Provider.tsx'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { ThemeProvider } from '@theme/index'
import { config } from '@tamagui/config'
const tamaguiConfig = createTamagui(config)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <TamaguiProvider config={tamaguiConfig}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TamaguiProvider>
    </Web3Provider>
  </React.StrictMode>,
)


