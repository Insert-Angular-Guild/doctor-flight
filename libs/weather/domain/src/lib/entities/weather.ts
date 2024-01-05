// front end objects

export interface WindUI {
  speed: {
    value: number;
    unit: 'm/s' | 'km/h' | 'mph';
  };
  direction: {
    degrees: number;
    cardinalDirection: string;
  };
  gust: {
    speed: number;
    unit: 'm/s' | 'km/h' | 'mph';
  };
}
