 import React from "react";
 import { Coin } from "../types/Coin";

 interface CoinCardProps{
    coin: Coin;
}

const CoinCard: React.FC<CoinCardProps> = ({coin}) => {
    return(
        <div
            className="
                border-1px
                border-solid
                border-[#ccc]
                p-[16px]
                m-[10px]
                w-[200px]
                align-center
            "
        >
            <img src={coin.image} alt={coin.name} width='50' />
            <h3>{coin.name}</h3>
            <p>{coin.symbol.toUpperCase()}</p>
            <p>Цена: ${coin.current_price.toLocaleString()}</p>
            <p>Изменение за 24ч: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Капитализация: ${coin.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinCard;