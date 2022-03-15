
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
module.exports = {

  networks: {
    ftm_testnet: {
      //  https://rpcapi.fantom.network for mainnet
      provider: () => new HDWalletProvider(mnemonic,'https://rpc.testnet.fantom.network/'),
      network_id: 4002, // as seen in error message
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ftm_mainnet: {
      provider: () => new HDWalletProvider(mnemonic,'https://rpc.ftm.tools'),
      network_id: 250, // as seen in error message
      confirmations: 3,
      timeoutBlocks: 10000,
      skipDryRun: true,
      networkCheckTimeout: 999999, // for handling timeouts
      // gas: 2000000,
      // gasPrice: 50000000000,
    },
    velas_mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://evmexplorer.velas.com/rpc`),
      network_id: 106,
      confirmations: 2,
      timeoutBlocks: 10000, // was 500 before
      skipDryRun: true,
      gas: 20000000,
      gasPrice: 50000000000, // 1 eth is the max
    },

    velas_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `wss://api.velas.com/`),
      network_id: 111,
      confirmations: 2,
      timeoutBlocks: 10000, // was 500 before
      skipDryRun: true,
      gas: 20000000,
      gasPrice: 50000000000, // 1 eth is the max
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.1",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

};
