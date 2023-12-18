export interface WeatherRequest {
  country: string;
  city: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  dateTime?: string;
  units?: 'metric' | 'imperial';
  language?: string;
}
