// https://eth-ropsten.alchemyapi.io/v2/yt7QQ9jzbwpGYekxq0njX-mldOdcAy8c

require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/yt7QQ9jzbwpGYekxq0njX-mldOdcAy8c',
      accounts: ['db495ad78f851cd69abd0920f7d117a9f6a0be5548cc003db65e085b68c0dec0']
    }
  }
}