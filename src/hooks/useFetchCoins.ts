import { useQuery } from "react-query";
import axios from 'axios';

export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    total_volume: number;
}

const fetchCoins = async (): Promise<Coin[]> => {
    const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false,
            },
        }
    );
    return res.data;
}

export const useFetchCoins = () => {
    return useQuery('coins', fetchCoins);
}