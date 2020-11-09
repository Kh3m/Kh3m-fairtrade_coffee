
# DApp Supply Chain
This project is aimed to create a coffee DApp supply chain solution backed by the Ethereum platform.
This smart contract achitects managing specific user permission controls as well as contracts
that track and verify a product's authenticity.

The supply chain starts from the production of the coffee by the farmer to the consumption of the 
coffee by the consumer 

### Transaction ID and Contract Address
- Transaction ID: 0x60eb2f3356ec3d60efb1f0c11b2a27a361935724f0c93856ba2842960b6a7d42
- The contract address: 0x08Ce578a792A22D63Ae75ca9a137A7891834E8F9

### Program version numbers
----
- nodejs: v15.0.1
 server side language.

- Truffle version number: 5.1.51
 A tool for developing smart contracts.

- truffle-hdwallet-provider: "^1.0.17"
 Use it to sign transactions for addresses derived from a 12 or 24 word mnemonic

 ### How to run the code
 - npm install
 - truffle compile
 - truffle migrate --reset --rinkeby <Your rinkeby url>
 - npm run dev (To run it on development environment)

 ### To test
 - npm run test
