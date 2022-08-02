# NFD Oracle Feed
This is a fork of Wax Delphi Oracle.
The main difference is that this one is pushing pairs one by one, instead of sending an array to the blockchain.

## Price feeds

- Bittrex: [ATOM/USD](https://api.bittrex.com/v3/markets/ATOM-USD/ticker)
- Bittrex: [MATIC/USD](https://api.bittrex.com/v3/markets/MATIC-USD/ticker)
- Bittrex: [XRP/USD](https://api.bittrex.com/v3/markets/XRP-USD/ticker)
- Bittrex: [DOT/USD](https://api.bittrex.com/v3/markets/DOT-USD/ticker)
- Bittrex: [ADA/USD](https://api.bittrex.com/v3/markets/ADA-USD/ticker)
- Bittrex: [WAXP/USD](https://api.bittrex.com/v3/markets/WAXP-USD/ticker)
- Bittrex: [CRO/USD](https://api.bittrex.com/v3/markets/CRO-USD/ticker)
- Bittrex: [UNI/USD](https://api.bittrex.com/v3/markets/UNI-USD/ticker)
- Bittrex: [AVAX/USD](https://api.bittrex.com/v3/markets/AVAX-USD/ticker)
- Bittrex: [BTC/USD](https://api.bittrex.com/v3/markets/BTC-USD/ticker)

`Sol` and `BNB` are not supported at the moment on Bittrex

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
