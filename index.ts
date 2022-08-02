import { CronJob } from "cron"
import { get_ticker } from "./plugins/bittrex"
import { Quote, write } from "./plugins/delphioracle"
import { transact } from "./src/utils";
import { api, ACCOUNT, AUTHORIZATION } from "./src/config";

new CronJob("* * * * *", async () => {
    const atom = await get_ticker("ATOM-USD");
    const matic = await get_ticker("MATIC-USD");
    const xrp = await get_ticker("XRP-USD");
    const dot = await get_ticker("DOT-USD");
    const ada = await get_ticker("ADA-USD");
    const eth = await get_ticker("WAXP-USD");
    const cro = await get_ticker("CRO-USD");
    const uni = await get_ticker("UNI-USD");
    const avax = await get_ticker("AVAX-USD");
    const sol = await get_ticker("SOL-USD");
    const bnb = await get_ticker("BNB-USD");
    const btc = await get_ticker("BTC-USD");

    const quotes: Quote[] = [
        { pair: "atomusd", value: to_uint(atom.lastTradeRate, 8)},
        { pair: "maticusd", value: to_uint(matic.lastTradeRate, 8)},
        { pair: "xrpusd", value: to_uint(xrp.lastTradeRate, 8)},
        { pair: "dotusd", value: to_uint(dot.lastTradeRate, 8)},
        { pair: "adausd", value: to_uint(ada.lastTradeRate, 8)},
        { pair: "ethusd", value: to_uint(eth.lastTradeRate, 8)},
        { pair: "crousd", value: to_uint(cro.lastTradeRate, 8)},
        { pair: "uniusd", value: to_uint(uni.lastTradeRate, 8)},
        { pair: "avaxusd", value: to_uint(avax.lastTradeRate, 8)},
        { pair: "solusd", value: to_uint(sol.lastTradeRate, 8)},
        { pair: "bnbusd", value: to_uint(bnb.lastTradeRate, 8)},
        { pair: "btcusd", value: to_uint(btc.lastTradeRate, 8)}
    ]

    for(const quote of quotes) {
        await transact( api, [ write( ACCOUNT, quote.pair, quote.value, [ AUTHORIZATION ] )]);
    };

}, null, true).fireOnTick();


function to_uint( num: string | number, exp: number ) {
    return Number((Number(num)).toFixed(10));
}