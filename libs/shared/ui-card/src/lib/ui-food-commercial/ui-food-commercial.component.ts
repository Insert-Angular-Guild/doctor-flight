// angular
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

// dependencies
import { Observable } from 'rxjs';

// shared
import { Commercial } from '../config/commercial.config';

interface FoodCommercial {
  name: string;
  price: number;
  type: string;
  calories: number;
}

@Component({
  selector: 'shared-ui-card-food-commercial',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgOptimizedImage],
  templateUrl: './ui-food-commercial.component.html',
  styleUrls: ['./ui-food-commercial.component.scss']
})
export class UIFoodCommercialComponent implements Commercial {
  private http: HttpClient = inject(HttpClient);

  foodCommercial = new Observable<FoodCommercial>();

  load(): void {
    // this.http
    //  .get<FoodCommercial[]>('/api/bookings')
    //  .pipe((bookingResponse$) =>
    //    log(bookingResponse$, 'BookingDefaultService:::findAll()')
    //  );
  }

  refresh(): void {}
}
