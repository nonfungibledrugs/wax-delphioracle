import fetch from "isomorphic-fetch";

interface Ticker {
    symbol: string;
    lastTradeRate: string;
    bidRate: string;
    askRate: string;
}

export async function get_ticker( ticker: string ): Promise<Ticker> {
    const url = `https://api.bittrex.com/v3/markets/${ticker}/ticker`;
    const response = await fetch( url );
    return response.json();
}
