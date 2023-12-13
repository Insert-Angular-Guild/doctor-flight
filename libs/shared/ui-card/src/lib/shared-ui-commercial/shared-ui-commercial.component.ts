// angular
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// ui
import { UIFoodCommercialComponent } from '../ui-food-commercial/ui-food-commercial.component';

// config
import {
  COMMERCIAL_CONFIG,
  CommercialConfig
} from '../config/commercial.config';

@Component({
  selector: 'shared-ui-card-commercial',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, UIFoodCommercialComponent],
  templateUrl: './shared-ui-commercial.component.html',
  styleUrls: ['./shared-ui-commercial.component.scss']
})
export class SharedUICommercialComponent {
  commercialConfig!: CommercialConfig;
  constructor(@Inject(COMMERCIAL_CONFIG) commercialConfig: CommercialConfig) {
    this.commercialConfig = commercialConfig;
  }
}
