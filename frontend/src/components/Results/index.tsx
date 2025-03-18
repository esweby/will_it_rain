import { City } from '../../types/city';

import DateHeader from '../DateHeader';
import WeatherIcon from '../WeatherIcon';
import WeatherDescription from '../WeatherDescription';
import CardRow from '../CardRow';

import classes from './Results.module.css';
interface ResultsProps {
  city: City;
}

const Results = ({ city }: ResultsProps) => {
  if (!city.forecasts) {
    return null;
  }

  return (
    <div className={classes.container}>
      {city?.forecasts?.map(forecast => (
        <div
          key={forecast.date.toDateString()}
          className={`${classes.card} ${classes[`bg-${forecast.weatherCode}`]}`}
        >
          <DateHeader date={forecast.date} />
          <WeatherIcon weatherCode={forecast.weatherCode} />
          <WeatherDescription weatherCode={forecast.weatherCode} />
          <CardRow
            description="Temperature"
            value={`${forecast.temperature}°`}
          />
          <CardRow
            description="Wind Speed"
            value={`${(forecast.windSpeed / 1.609).toFixed(1)}mph`}
          />
        </div>
      ))}
    </div>
  );
};

export default Results;
