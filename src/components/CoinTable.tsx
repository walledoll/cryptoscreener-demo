import React from "react";
import CoinCard from "./CoinCard";
import { Coin } from "../types/Coin";

interface CoinTableProps {
    coins: Coin[];
}

const CoinTable: React.FC<CoinTableProps> = ({coins}) => {
    return(
        <div
            className="
                flex
                flex-wrap
                gap-[20px]
                justify-center
            "
        >
            {coins.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
            ))}
        </div>
    )
}

export default CoinTable;