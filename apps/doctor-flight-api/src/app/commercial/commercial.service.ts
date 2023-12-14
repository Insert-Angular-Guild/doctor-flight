import { Injectable } from '@nestjs/common';
import {
  caesarSalad,
  cheeseburger,
  FoodCommercial,
  fruitSmoothie,
  margheritaPizza
} from './commercial.data';

@Injectable()
export class CommercialService {
  findAllFood(): FoodCommercial[] {
    return [caesarSalad, cheeseburger, margheritaPizza, fruitSmoothie];
  }
}
