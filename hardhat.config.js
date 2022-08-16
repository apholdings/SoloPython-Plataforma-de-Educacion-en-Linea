require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/cache',
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    goerli: {
      url: process.env.PRIVATE_GOERLI_URL,
      accounts: [`0x${process.env.PRIVATE_KEYS}`]
    }
  }
};
