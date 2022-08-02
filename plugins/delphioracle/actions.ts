import { Action, Authorization } from "eosjs/dist/eosjs-serialize";
import { api, ACCOUNT, AUTHORIZATION } from "../../src/config";


export interface Quote {
    value: number;
    pair: string
}

export function write( owner: string, symbol: string, lastTradeRate: number, authorization?: Authorization[] ): Action {
    return {
        account: owner,
        name: "inspire",
        authorization: authorization || [ { actor: owner, permission: "active" } ],
        data: {
            owner,
            symbol,
            lastTradeRate
        }
    }
}
