require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
const { mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  //defaultNetwork: "testnet",
  defaultNetwork: "mumbai",
  networks: {

  dashboard: {
     url: "http://localhost:24012/rpc"
   },

    localhost: {
      url: "http://127.0.0.1:7545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      // chainId: 137,
      // gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    apiKey:'HWSUN9947Q8ESYGUK73NZ5JYDFDATT4RJ8' //mumbai
    // apiKey: {
    //  bscTestnet: '83SFMPWFXCGB3PHI3GJZER6INMYJIXWPTI'
    //  //bscTestnet: 'BKCZHVE1SPPE39IA5KXHMDRV57JRFIZYJG'
    // }
  },

  solidity: {
  version: "0.8.4",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
