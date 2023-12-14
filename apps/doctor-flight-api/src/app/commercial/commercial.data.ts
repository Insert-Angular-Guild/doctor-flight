export interface FoodCommercial {
  name: string;
  price: number;
  type: string;
  calories: number;
}

export const cheeseburger: FoodCommercial = {
  name: 'Cheeseburger',
  price: 5.99,
  type: 'Fast Food',
  calories: 500
};

export const caesarSalad: FoodCommercial = {
  name: 'Caesar Salad',
  price: 7.49,
  type: 'Salad',
  calories: 350
};

export const margheritaPizza: FoodCommercial = {
  name: 'Margherita Pizza',
  price: 12.99,
  type: 'Italian Cuisine',
  calories: 800
};

export const fruitSmoothie: FoodCommercial = {
  name: 'Fruit Smoothie',
  price: 4.5,
  type: 'Beverage',
  calories: 200
};
