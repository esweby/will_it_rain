import { Forecasts } from './forecast';

export type City = {
  latitude: number;
  longitude: number;
  forecasts?: Forecasts;
};

export type Cities = { [Key: string]: City };
