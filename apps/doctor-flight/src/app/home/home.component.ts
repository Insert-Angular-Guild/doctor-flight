// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// side-navigation
import { SideNavigationUIScreenComponent } from '@shared/feature-side-navigation';

// doctor-flight
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'doctor-flight-home',
  standalone: true,
  imports: [
    CommonModule,
    SideNavigationUIScreenComponent,
    SideNavigationUIScreenComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly NavigationComponent = NavigationComponent;
}
