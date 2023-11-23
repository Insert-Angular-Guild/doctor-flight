export interface BookingResponse {
  origin: string;
  destination: string;
  plane: Plane;
  date: Date;
  car?: Car;
  hotel?: Hotel;
  nourishment?: Nourishment[];
  excursions?: Excursion[];
  priority: boolean;
}

export interface Nourishment {
  name: string;
  calories: number;
  type: string;
}

export interface Plane {
  manufacturer: string;
  model: string;
  variant?: string;
  registration?: string;
  year: number;
  maxSpeed?: number;
}

export interface Car {
  name: string;
  company: string;
  seats: number;
  doors: number;
  year: number;
  color: string;
  mileage: number;
  engine?: Engine;
  transition?: string;
  vin?: number;
  features: string[];
  registration?: Registration;
  insurance?: Insurance;
}

export interface Engine {
  type: string;
  fuelType: string;
  horsepower: number;
}

export interface Registration {
  number: string;
  expiryDate: string;
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  validity: Validity;
}

export interface Validity {
  from: Date;
  to: Date;
}

interface Excursion {
  id: number;
  destination: string;
  date: Date;
  durationHours: number;
  guide?: string;
  description?: string;
}

interface Hotel {
  name: string;
  location: string;
  rating: number;
  facilities: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  checkInTime: string;
  checkOutTime: string;
  roomType: {
    type: string;
    description: string;
    pricePerNight: number;
  }[];
  reviews?: {
    userName: string;
    rating: number;
    comment: string;
  }[];
}
