import { Booking } from './booking.model';

export const bookingData: Booking[] = [
  {
    info: {
      origin: 'New York',
      destination: 'Los Angeles',
      priority: false
    },
    plane: {
      manufacturer: 'Boeing',
      model: '747',
      year: 2015
    },
    date: new Date('2023-12-15'),
    car: {
      name: 'Toyota Camry',
      company: 'Toyota',
      seats: 5,
      doors: 4,
      year: 2022,
      color: 'Silver',
      mileage: 15000,
      features: ['GPS', 'Bluetooth'],
      registration: {
        number: 'ABC123',
        expiryDate: '2024-08-31'
      },
      insurance: {
        provider: 'Geico',
        policyNumber: 'GECO456',
        validity: {
          from: new Date('2023-01-01'),
          to: new Date('2024-01-01')
        }
      }
    },
    hotel: {
      name: 'Luxury Resort & Spa',
      location: 'Miami Beach',
      rating: 4.7,
      facilities: ['Pool', 'Spa', 'Gym'],
      contactInfo: {
        phone: '+1-123-456-7890',
        email: 'info@luxuryresort.com',
        address: '123 Ocean Drive, Miami, FL'
      },
      checkInTime: '3:00 PM',
      checkOutTime: '11:00 AM',
      roomType: [
        {
          type: 'Deluxe Suite',
          description: 'Ocean view, king-size bed',
          pricePerNight: 450
        },
        {
          type: 'Standard Room',
          description: 'City view, queen-size bed',
          pricePerNight: 250
        }
      ],
      reviews: [
        {
          userName: 'Traveler123',
          rating: 4.8,
          comment: 'Amazing place with great service!'
        },
        {
          userName: 'Adventurer99',
          rating: 4.5,
          comment: 'Beautiful location and comfortable rooms.'
        }
      ]
    },
    nourishment: [
      {
        name: 'Steak Dinner',
        calories: 800,
        type: 'Dinner'
      },
      {
        name: 'Fruit Salad',
        calories: 150,
        type: 'Snack'
      }
    ],
    excursions: [
      {
        id: 1,
        destination: 'Grand Canyon',
        date: new Date('2023-12-18'),
        durationHours: 8,
        guide: 'John Doe',
        description: 'Explore the breathtaking views of the Grand Canyon.'
      },
      {
        id: 2,
        destination: 'Wine Tasting Tour',
        date: new Date('2023-12-20'),
        durationHours: 4,
        guide: 'Emily Smith',
        description: 'Enjoy a tour of local wineries and tastings.'
      }
    ]
  },
  {
    info: {
      origin: 'London',
      destination: 'Paris',
      priority: true
    },
    plane: {
      manufacturer: 'Airbus',
      model: 'A320',
      year: 2019
    },
    date: new Date('2023-12-10'),
    car: {
      name: 'Honda Civic',
      company: 'Honda',
      seats: 4,
      doors: 4,
      year: 2021,
      color: 'Red',
      mileage: 20000,
      features: ['Sunroof', 'Leather Seats'],
      registration: {
        number: 'XYZ789',
        expiryDate: '2024-10-15'
      },
      insurance: {
        provider: 'State Farm',
        policyNumber: 'STATE987',
        validity: {
          from: new Date('2023-01-01'),
          to: new Date('2024-01-01')
        }
      }
    },
    hotel: {
      name: 'Eiffel Tower View Hotel',
      location: 'Paris',
      rating: 4.5,
      facilities: ['Restaurant', 'Bar', 'Fitness Center'],
      contactInfo: {
        phone: '+33-123-456-789',
        email: 'info@eiffeltowerviewhotel.com',
        address: '123 Avenue des Champs-Élysées, Paris'
      },
      checkInTime: '2:00 PM',
      checkOutTime: '12:00 PM',
      roomType: [
        {
          type: 'Suite',
          description: 'Elegant suite with a view of the Eiffel Tower',
          pricePerNight: 600
        },
        {
          type: 'Standard Room',
          description: 'Comfortable room with city view',
          pricePerNight: 250
        }
      ],
      reviews: [
        {
          userName: 'Traveler456',
          rating: 4.3,
          comment: 'Great location and friendly staff!'
        },
        {
          userName: 'Explorer789',
          rating: 4.0,
          comment: 'Nice rooms but could improve amenities.'
        }
      ]
    },
    nourishment: [
      {
        name: 'Croissant',
        calories: 250,
        type: 'Breakfast'
      },
      {
        name: 'Salmon Salad',
        calories: 350,
        type: 'Lunch'
      }
    ],
    excursions: [
      {
        id: 3,
        destination: 'Louvre Museum',
        date: new Date('2023-12-12'),
        durationHours: 6,
        guide: 'Sophie Martin',
        description: 'Explore the world-renowned Louvre Museum.'
      },
      {
        id: 4,
        destination: 'Seine River Cruise',
        date: new Date('2023-12-14'),
        durationHours: 3,
        guide: 'Lucas Johnson',
        description: 'Enjoy a scenic cruise along the Seine River.'
      }
    ]
  }
];
