export type Forecast = { 
    date: Date, 
    weatherCode: string, 
    temperature: number,
    windSpeed: number,
    windDirection: number,
}

export type Forecasts = Array<Forecast>;