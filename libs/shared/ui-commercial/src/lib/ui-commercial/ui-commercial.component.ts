// angular
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'shared-ui-commercial',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgOptimizedImage],
  templateUrl: './ui-commercial.component.html',
  styleUrls: ['./ui-commercial.component.scss']
})
export class UICommercialComponent {}
