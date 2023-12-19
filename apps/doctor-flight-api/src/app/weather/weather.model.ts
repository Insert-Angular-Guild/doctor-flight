export interface WeatherStatus {
  status: 'LIVE' | 'UNKNOWN' | 'DEAD';
  date?: Date;
}

export interface Wind {
  speed: {
    value: number; // Speed of the wind in meters per second
    unit: 'm/s' | 'km/h' | 'mph'; // Unit for wind speed
  };
  direction: {
    degrees: number; // Wind direction in degrees (0° to 360°)
    cardinalDirection: string; // Cardinal direction (e.g., "N" for North, "SW" for Southwest)
  };
  gust?: {
    speed: number; // Gust speed in meters per second
    unit: 'm/s' | 'km/h' | 'mph'; // Unit for gust speed
  };
}

export interface Temperature {
  current: {
    value: number; // Current temperature value
    unit: 'Celsius' | 'Fahrenheit' | 'Kelvin'; // Unit of temperature
  };
  feelsLike: {
    value: number; // Feels like temperature value
    unit: 'Celsius' | 'Fahrenheit' | 'Kelvin'; // Unit of temperature
  };
  min: {
    value: number; // Minimum temperature value
    unit: 'Celsius' | 'Fahrenheit' | 'Kelvin'; // Unit of temperature
  };
  max: {
    value: number; // Maximum temperature value
    unit: 'Celsius' | 'Fahrenheit' | 'Kelvin'; // Unit of temperature
  };
}

export interface Rainfall {
  volume: {
    value: number; // Amount of rainfall
    unit: 'mm' | 'in'; // Unit for rainfall volume
  };
  probability: number; // Probability of rainfall (percentage)
  lastHour?: {
    volume: number; // Rainfall in the last hour
    unit: 'mm' | 'in'; // Unit for rainfall volume
  };
}

export interface Pressure {
  value: {
    value: number; // Atmospheric pressure value
    unit: 'hPa' | 'atm' | 'mmHg'; // Unit of pressure
  };
  trend: 'rising' | 'falling' | 'steady'; // Trend of pressure
}

export interface Hail {
  size: {
    diameter: number; // Diameter of hailstones (in millimeters)
    unit: 'mm'; // Unit for hailstone diameter
  };
  intensity: 'light' | 'moderate' | 'heavy'; // Intensity of hail
}

export interface Snowfall {
  amount: {
    value: number; // Amount of snowfall
    unit: 'cm' | 'in'; // Unit for snowfall amount
  };
  intensity: 'light' | 'moderate' | 'heavy'; // Intensity of snowfall
  type: 'powdery' | 'wet' | 'icy'; // Type of snow (powdery, wet, icy)
  accumulation: {
    value: number; // Snow accumulation
    unit: 'cm' | 'in'; // Unit for snow accumulation
  };
}
