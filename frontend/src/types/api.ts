export type CityResult = Array<{
  latitude: number;
  longitude: number;
}> | null;

export type Daily = {
  time: string[];
  weather_code: string[];
  apparent_temperature_max: number[];
  wind_speed_10m_max: number[];
  wind_direction_10m_dominant: number[];
} | null;
