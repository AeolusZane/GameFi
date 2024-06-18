import '@tamagui/core/reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Web3Provider from '@provider/Web3Provider'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { PortalProvider } from '@tamagui/portal'
import { ThemeProvider } from '@theme/index'
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config)
window.global = window

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <TamaguiProvider config={tamaguiConfig}>
        <ThemeProvider>
          <PortalProvider>
            <App />
          </PortalProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </Web3Provider>
  </React.StrictMode>,
)


