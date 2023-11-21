// angular
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  Type as ComponentType
} from '@angular/core';
import { CommonModule } from '@angular/common';

// side-navigation
import { SideNavigationService } from '../side-navigation.service';

@Component({
  selector: 'shared-feature-side-navigation-ui-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-screen.component.html',
  styleUrls: ['./ui-screen.component.scss']
})
export class SideNavigationUIScreenComponent
  implements AfterViewInit, OnDestroy
{
  @Input()
  sideNavigationContainer!: ComponentType<unknown>;

  constructor(public sidenavService: SideNavigationService) {}

  ngAfterViewInit(): void {
    if (this.isSideNavigationInjected) {
      this.sidenavService.push(this.sideNavigationContainer);
    }
  }

  ngOnDestroy(): void {
    if (this.isSideNavigationInjected) {
      this.sidenavService.pop();
    }
  }

  get isSideNavigationInjected(): boolean {
    return this.sideNavigationContainer !== null;
  }
}
