require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks:{
    hardhat:{
      chainId: 80001,
    },
    mumbai:{
      url: "https://rpc-mumbai.maticvigil.com",
      accounts:[`PRIVATE_KEY`],
    },
    meteora:{
      url: "https://meteora-evm.gatenode.cc",
      accounts:[`PRIVATE_KEY`],
    }
  }
};
