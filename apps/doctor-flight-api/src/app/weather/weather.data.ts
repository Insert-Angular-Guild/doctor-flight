import {
  Hail,
  Pressure,
  Rainfall,
  Snowfall,
  Temperature,
  Wind
} from './weather.model';

export const wind: Wind = {
  speed: {
    value: Math.floor(Math.random() * 100) + 1,
    unit: 'km/h'
  },
  direction: {
    degrees: Math.floor(Math.random() * 360),
    cardinalDirection: 'WNW'
  },
  gust: {
    speed: Math.floor(Math.random() * 50) + 1,
    unit: 'm/s'
  }
};

export const temperature: Temperature = {
  current: {
    value: Math.floor(Math.random() * 50) - 20,
    unit: 'Celsius'
  },
  feelsLike: {
    value: Math.floor(Math.random() * 50) - 20,
    unit: 'Celsius'
  },
  min: {
    value: Math.floor(Math.random() * 20) - 20,
    unit: 'Celsius'
  },
  max: {
    value: Math.floor(Math.random() * 50),
    unit: 'Celsius'
  }
};

export const rainfall: Rainfall = {
  volume: {
    value: Math.random() * 100,
    unit: 'mm'
  },
  probability: Math.floor(Math.random() * 101),
  lastHour: {
    volume: Math.random() * 50,
    unit: 'mm'
  }
};

export const pressure: Pressure = {
  value: {
    value: Math.floor(Math.random() * 1000) + 900,
    unit: 'hPa'
  },
  trend: 'rising'
};

export const hail: Hail = {
  size: {
    diameter: Math.floor(Math.random() * 20) + 5,
    unit: 'mm'
  },
  intensity: 'light'
};

export const snowfall: Snowfall = {
  amount: {
    value: Math.floor(Math.random() * 30),
    unit: 'cm'
  },
  intensity: 'light',
  type: 'powdery',
  accumulation: {
    value: Math.floor(Math.random() * 50),
    unit: 'cm'
  }
};
