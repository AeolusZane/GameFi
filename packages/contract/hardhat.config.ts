import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY!
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [{
        // By default, hardhat will use the first account as the deployer to deploy the contract
        privateKey: process.env.TEST_NET_PRIVATE_KEY!,
        balance: "1000000000000000000000000",
      }, {
        privateKey: process.env.TEST_NET_PRIVATE_KEY2!,
        balance: "1000000000000000000000000",
      }]
    },
    infura: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY!}`,
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
};

export default config;
