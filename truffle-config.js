const HDWalletProvider = require("truffle-hdwallet-provider");
const keys = require("./config_keys/keys.js");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(keys.mnemonic, `https://rinkeby.infura.io/v3/${keys.infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.4.23"
    }
  }
};