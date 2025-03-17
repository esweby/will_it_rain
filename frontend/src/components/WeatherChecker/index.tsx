import { useEffect, useState } from "react"
import Search from "../Search"
import Results from "../Results"
import useDebounce from "../../hooks/useDebounce"
import useCityQuery from "../../hooks/useCityQuery"

const WeatherChecker = () => {
    const [cityQuery, setCityQuery] = useState("")
    
    const debouncedCityQuery = useDebounce(cityQuery, 500);
    const { cities, fetchCity } = useCityQuery();

    useEffect(() => {
        fetchCity(debouncedCityQuery);
    }, [debouncedCityQuery, fetchCity])

    return(
        <>
            <Search query={cityQuery} setQuery={setCityQuery} />
            {cities[cityQuery] && <Results city={cities[cityQuery]} />}
        </>
    )
}

export default WeatherChecker;
