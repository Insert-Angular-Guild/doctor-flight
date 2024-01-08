// front end objects
export interface UISnowfall {
  amount: {
    value: number;
    unit: 'cm' | 'in';
  };
  intensity: 'light' | 'moderate' | 'heavy';
  type: 'powdery' | 'wet' | 'icy';
  accumulation: {
    value: number;
    unit: 'cm' | 'in';
  };
}
