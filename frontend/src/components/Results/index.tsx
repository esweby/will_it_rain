import DateHeader from "../DateHeader";
import { City } from "../../types/city";

import classes from './Results.module.css'
import WeatherIcon from "../WeatherIcon";
import WeatherDescription from "../WeatherDescription";
import Temperature from "../Temperature";
import Wind from "../Wind";

interface ResultsProps {
    city: City;
}

const Results = ({ city }: ResultsProps) => {

    if(!city.forecasts) {
        return null;
    }

    return(
        <div className={classes.container}>
            {city?.forecasts?.map((forecast) => (
                <div key={forecast.date.toDateString()} className={classes.card}>
                    <DateHeader date={forecast.date} />
                    <WeatherIcon weatherCode={forecast.weatherCode} />
                    <WeatherDescription weatherCode={forecast.weatherCode} />
                    <Temperature temperature={forecast.temperature} />
                    <Wind windSpeed={forecast.windSpeed} windDirection={forecast.windDirection} />
                </div>
            ))}
        </div>
    )
}

export default Results;
