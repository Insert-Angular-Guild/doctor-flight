export interface BookingCardUI {
  flightUI: FlightUI;
  foodUI: FoodUI;
}

export interface FlightUI {
  origin: string;
  destination: string;
  priority: boolean;
}

export interface FoodUI {
  name: string;
  calories: number;
  type: string;
}
