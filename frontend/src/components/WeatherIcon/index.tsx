import { weatherCodes } from '../../assets/weatherCodes';

import classes from './WeatherIcon.module.css';

interface WeatherIconProps {
  weatherCode: string;
}

const WeatherIcon = ({ weatherCode = '0' }: WeatherIconProps) => {
  return (
    <img
      src={weatherCodes[weatherCode].img}
      alt={weatherCodes[weatherCode].text}
      className={classes.img}
    />
  );
};

export default WeatherIcon;
