import { Filters } from "../types/Filters";

type FilterProps  = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
};

export const FilterPanel: React.FC<FilterProps> = ({filters, setFilters}) =>{
    return(
        <div>
            <h3 className="text-center">
                Фильтры</h3>
            <div className="grid grid-cols-1 aligh-center justify-center">
                 <label htmlFor="">Минимальная капитализация:
                    <input 
                        className="
                            ml-[70px]
                            border-[#000]
                            border-[1px]
                            border-solid
                        "
                        type="number"
                        value={filters.minMarketCap || ''}
                        onChange={(e) => {
                            setFilters({
                                ...filters,
                                minMarketCap: Number(e.target.value),
                            })
                        }}
                    />
                </label>
                <label htmlFor="">Минимальное изменение за 24 часа:
                    <input 
                        type="number"
                        className="
                            ml-[20px]
                            border-[#000]
                            border-[1px]
                            border-solid
                        "
                        value={filters.minChange || ''}
                        onChange={(e) => {
                            setFilters({
                                ...filters,
                                minChange: Number(e.target.value),
                            })
                        }}
                    />
                </label>
                <label htmlFor="">Максимальная капитализация:
                    <input 
                        type="number"
                        value={filters.maxMarketCap || ''}
                        onChange={(e) => {
                            setFilters({
                                ...filters,
                                maxMarketCap: Number(e.target.value),
                            })
                        }}
                    />
                </label>
                <label htmlFor="">Максимальное изменение за 24 часа:
                    <input 
                        type="number"
                        value={filters.maxChange || ''}
                        onChange={(e) => {
                            setFilters({
                                ...filters,
                                maxChange: Number(e.target.value),
                            })
                        }}
                    />
                </label>
            </div>
           
        </div>
    )
}