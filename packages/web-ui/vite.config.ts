import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import tamaguiConfig from './tamagui.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  tamaguiPlugin(tamaguiConfig),
  process.env.NODE_ENV === 'production' ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
})
