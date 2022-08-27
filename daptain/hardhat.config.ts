import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  paths: {
    artifacts: './src/artofacts',
  },
  solidity: "0.8.9",
};

export default config;
