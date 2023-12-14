// angular
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'shared-ui-card',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UICardComponent {}
