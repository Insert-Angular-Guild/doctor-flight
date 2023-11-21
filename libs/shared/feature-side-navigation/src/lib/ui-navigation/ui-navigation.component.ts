// angular
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// side-navigation
import { SideNavigationUILinkComponent } from '../ui-link/ui-link.component';

@Component({
  selector: 'shared-feature-side-navigation-ui-navigation',
  standalone: true,
  imports: [SideNavigationUILinkComponent, MatIconModule],
  templateUrl: './ui-navigation.component.html',
  styleUrls: ['./ui-navigation.component.scss']
})
export class SideNavigationUIComponent {}
