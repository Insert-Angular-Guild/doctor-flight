// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// side-navigation
import {
  SideNavigationUIComponent,
  SideNavigationUILinkComponent,
  SideNavLink
} from '@shared/feature-side-navigation';

@Component({
  selector: 'doctor-flight-navigation',
  standalone: true,
  imports: [
    CommonModule,
    SideNavigationUIComponent,
    SideNavigationUILinkComponent,
    MatIconModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  sideNavLinks: SideNavLink[] = [
    {
      name: 'Home',
      iconName: 'home',
      path: ``
    },
    {
      name: 'Booking',
      iconName: 'attach_file',
      path: `/bookings`
    }
  ];
}
