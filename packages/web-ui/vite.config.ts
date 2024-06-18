import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
// import tamaguiConfig from './tamagui.config'
import path from 'path'
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // tamaguiPlugin(tamaguiConfig),
    // process.env.NODE_ENV === 'production' ? tamaguiExtractPlugin(tamaguiConfig) : null,

  ].filter(Boolean),
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@log": path.resolve(__dirname, "src/log"),
      "@provider": path.resolve(__dirname, "src/provider"),
    }
  },
  define: {
    "process.env.DEV_CONTRACT_ADDRESS": process.env.DEV_CONTRACT_ADDRESS,
    "process.env.PRO_CONTRACT_ADDRESS": process.env.PRO_CONTRACT_ADDRESS,
  }
})
