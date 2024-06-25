import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginString from 'vite-plugin-string'
// import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
// import tamaguiConfig from './tamagui.config'
import path from 'path'
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginString()
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
      "@contract": path.resolve(__dirname, "src/contract"),
      "@abi": path.resolve(__dirname, "../contract/artifacts/contracts"),
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  },
  define: {
    "process.env.DEV_CONTRACT_ADDRESS": process.env.DEV_CONTRACT_ADDRESS,
    "process.env.ALCHEMY_CONTRACT_ADDRESS": process.env.ALCHEMY_CONTRACT_ADDRESS,
    "process.env.ETHER_CONTRACT_ADDRESS": process.env.ETHER_CONTRACT_ADDRESS,
  }
})
