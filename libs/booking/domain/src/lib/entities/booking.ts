export interface Booking {
  origin: string;
  destination: string;
  priority: boolean;
  food: Food[];
}

export interface Food {
  name: string;
  calories: number;
  type: string;
}
