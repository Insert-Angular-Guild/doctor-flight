export interface BookingResponse {
  info: BookingExtraInfo;
  plane: PlaneResponse;
  date: Date;
  car?: CarResponse;
  hotel?: HotelResponse;
  nourishment?: NourishmentResponse[];
  excursions?: ExcursionResponse[];
}

export interface BookingExtraInfo {
  origin: string;
  destination: string;
  priority: boolean;
}

export interface NourishmentResponse {
  name: string;
  calories: number;
  type: string;
}

export interface PlaneResponse {
  manufacturer: string;
  model: string;
  variant?: string;
  registration?: string;
  year: number;
  maxSpeed?: number;
}

export interface CarResponse {
  name: string;
  company: string;
  seats: number;
  doors: number;
  year: number;
  color: string;
  mileage: number;
  engine?: EngineResponse;
  transition?: string;
  vin?: number;
  features: string[];
  registration?: RegistrationResponse;
  insurance?: InsuranceResponse;
}

export interface EngineResponse {
  type: string;
  fuelType: string;
  horsepower: number;
}

export interface RegistrationResponse {
  number: string;
  expiryDate: string;
}

export interface InsuranceResponse {
  provider: string;
  policyNumber: string;
  validity: ValidityResponse;
}

export interface ValidityResponse {
  from: Date;
  to: Date;
}

interface ExcursionResponse {
  id: number;
  destination: string;
  date: Date;
  durationHours: number;
  guide?: string;
  description?: string;
}

interface HotelResponse {
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
