import sunny from './sunny.svg';
import thunderstormLight from './thunderstormLight.svg';
import partlyCloudy from './partlyCloudy.svg';
import fog from './fog.svg';
import rain from './rain.svg';
import rainHeavy from './rainHeavy.svg';
import snow from './snow.svg';
import snowHeavy from './snowHeavy.svg';

export const weatherCodes: { [key: string]: { text: string; img: string } } = {
  '0': {
    text: 'Clear Sky',
    img: sunny,
  },
  '1': {
    text: 'Mainly clear, partly cloudy, and overcast',
    img: partlyCloudy,
  },
  '2': {
    text: 'Mainly clear, partly cloudy, and overcast',
    img: partlyCloudy,
  },
  '3': {
    text: 'Mainly clear, partly cloudy, and overcast',
    img: partlyCloudy,
  },
  '45': {
    text: 'Fog and depositing rime fog',
    img: fog,
  },
  '48': {
    text: 'Fog and depositing rime fog',
    img: fog,
  },
  '51': {
    text: 'Drizzle: Light, moderate, and dense intensity',
    img: rain,
  },
  '53': {
    text: 'Drizzle: Light, moderate, and dense intensity',
    img: rain,
  },
  '55': {
    text: 'Drizzle: Light, moderate, and dense intensity',
    img: rain,
  },
  '56': {
    text: 'Freezing Drizzle: Light and dense intensity',
    img: rainHeavy,
  },
  '57': {
    text: 'Freezing Drizzle: Light and dense intensity',
    img: rainHeavy,
  },
  '61': {
    text: 'Rain: Slight, moderate and heavy intensity',
    img: rain,
  },
  '63': {
    text: 'Rain: Slight, moderate and heavy intensity',
    img: rain,
  },
  '65': {
    text: 'Rain: Slight, moderate and heavy intensity',
    img: rain,
  },
  '66': {
    text: 'Freezing Rain: Light and heavy intensity',
    img: rainHeavy,
  },
  '67': {
    text: 'Freezing Rain: Light and heavy intensity',
    img: rainHeavy,
  },
  '71': {
    text: 'Snow fall: Slight, moderate, and heavy intensity',
    img: snow,
  },
  '73': {
    text: 'Snow fall: Slight, moderate, and heavy intensity',
    img: snow,
  },
  '75': {
    text: 'Snow fall: Slight, moderate, and heavy intensity',
    img: snow,
  },
  '77': {
    text: 'Snow grains',
    img: snow,
  },
  '80': {
    text: 'Rain showers: Slight, moderate, and violent',
    img: rainHeavy,
  },
  '81': {
    text: 'Rain showers: Slight, moderate, and violent',
    img: rainHeavy,
  },
  '82': {
    text: 'Rain showers: Slight, moderate, and violent',
    img: rainHeavy,
  },
  '85': {
    text: 'Snow showers slight and heavy',
    img: snowHeavy,
  },
  '86': {
    text: 'Snow showers slight and heavy',
    img: snowHeavy,
  },
  '95': {
    text: 'Thunderstorm: Slight or moderate',
    img: thunderstormLight,
  },
  '96': {
    text: 'Thunderstorm with slight and heavy hail',
    img: thunderstormLight,
  },
  '99': {
    text: 'Thunderstorm with slight and heavy hail',
    img: thunderstormLight,
  },
};
