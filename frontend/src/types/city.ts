import { Forecasts } from "./forecast";

export type City = {
    latitude: number;
    longitude: number;
    forecasts?: Forecasts;
}