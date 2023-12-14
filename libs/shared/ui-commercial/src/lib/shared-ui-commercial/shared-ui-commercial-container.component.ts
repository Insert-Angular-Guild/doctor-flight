// angular
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgForOf, NgIf } from '@angular/common';

// config
import {
  COMMERCIAL_CONFIG,
  CommercialConfig
} from '../config/commercial.config';

// ui
import { UICommercialComponent } from '../ui-commercial/ui-commercial.component';

// shared
import { ShadowDirective } from '@shared/util-styling-directives';

@Component({
  selector: 'shared-ui-commercial-container',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    NgIf,
    NgForOf,
    ShadowDirective,
    UICommercialComponent
  ],
  templateUrl: './shared-ui-commercial-container.component.html',
  styleUrls: ['./shared-ui-commercial-container.component.scss']
})
export class SharedUICommercialContainerComponent {
  commercialConfig!: CommercialConfig;
  constructor(@Inject(COMMERCIAL_CONFIG) commercialConfig: CommercialConfig) {
    this.commercialConfig = commercialConfig;
  }

  mapToPath(iconName: string): string {
    return `/assets/${iconName}.svg`;
  }
}
