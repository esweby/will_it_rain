import { weatherCodes } from '../../assets/weatherCodes';

import classes from './WeatherDescription.module.css';

interface WeatherDescriptionProps {
  weatherCode: string;
}

const WeatherDescription = ({ weatherCode = '0' }: WeatherDescriptionProps) => {
  return (
    <p className={classes.description}>
      {weatherCodes[weatherCode]?.text || ''}
    </p>
  );
};

export default WeatherDescription;
