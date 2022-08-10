import fetch from "isomorphic-fetch";

const coin_ids = [
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

export async function get_quotes(): Promise<string> {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin_ids.concat()}&vs_currencies=usd&include_24hr_change=true`;
    const response = await fetch( url );
    return response.json();
}
