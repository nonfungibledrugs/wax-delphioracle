# NFD Oracle Feed
This is a fork of Wax Delphi Oracle.
The main difference is that this one is pushing pairs one by one, instead of sending an array to the blockchain.

## Price feeds
We currently fetch the following coins from CoinGecko:

```[
    "ethereum",
    "bitcoin",
    "binancecoin",
    "cardano",
    "solana",
    "polkadot",
    "ripple",
    "matic-network",
    "cosmos",
    "avalanche-2",
    "terra-luna",
    "uniswap",
    "crypto-com-chain"
]
```

Here the url we use `https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd&include_24hr_change=true`


## `.env` settings

```bash
NODEOS_ENDPOINT="https://wax.api.eosnation.io"
PRIVATE_KEYS="<PRIVATE KEY>"
ACCOUNT="<ACCOUNT>"
PERMISSION="<PERMISSION>"
```

## Install

```
$ pm2 install typescript
$ npm install
```

## Quickstart

```
$ npm start
```

## Testnet Contract
You can check the current test contract [here](https://wax-test.bloks.io/account/nfdoracleco1)
