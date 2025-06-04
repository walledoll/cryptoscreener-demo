import React, {useState} from 'react';
import { useFetchCoins } from './hooks/useFetchCoins';
import { FilterPanel } from './components/FilterPanel';
import CoinTable from './components/CoinTable';
import { Filters } from './types/Filters';

function App() {
  const [filters, setFilters] = useState<Filters>({});

  const { data: coins = [], isLoading} = useFetchCoins();

  const filteredCoins = coins.filter((coin) => {
    if(filters.minMarketCap && coin.market_cap < filters.minMarketCap) return false;
    if(filters.maxMarketCap && coin.market_cap > filters.maxMarketCap) return false;
    if(filters.minChange && coin.price_change_percentage_24h < filters.minChange) return false
    return true; 
  })

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div
      className='
        p-[20px]
      '
    >
      <h1 
        className="text-center"
      >Скринер криптовалют</h1>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <CoinTable coins={filteredCoins}/>
    </div>
  )
}

export default App
