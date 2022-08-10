import { CronJob } from "cron"
import { get_quotes } from "./plugins/coingecko"
import { Quote, write } from "./plugins/delphioracle"
import { transact } from "./src/utils";
import { api, ACCOUNT, AUTHORIZATION } from "./src/config";

new CronJob("* * * * *", async () => {
    const response = await get_quotes();

    const quotes: Quote[] = [
        { pair: "ethusd", value: response["ethereum"]["usd"]},
        { pair: "btcusd", value: response["bitcoin"]["usd"]},
        { pair: "bnbusd", value: response["binancecoin"]["usd"]},
        { pair: "adausd", value: response["cardano"]["usd"]},
        { pair: "solusd", value: response["solana"]["usd"]},
        { pair: "dotusd", value: response["polkadot"]["usd"]},
        { pair: "xrpusd", value: response["ripple"]["usd"]},
        { pair: "maticusd", value: response["matic-network"]["usd"]},
        { pair: "cosmos", value: response["cosmos"]["usd"]},
        { pair: "avaxusd", value: response["avalanche-2"]["usd"]},
        { pair: "uniusd", value: response["uniswap"]["usd"]},
        { pair: "crousd", value: response["crypto-com-chain"]["usd"]}
    ]

    for(const quote of quotes) {
        await transact( api, [ write( ACCOUNT, quote.pair, quote.value, [ AUTHORIZATION ] )]);
    };

}, null, true).fireOnTick();


function to_uint( num: string | number, exp: number ) {
    return Number((Number(num)).toFixed(10));
}