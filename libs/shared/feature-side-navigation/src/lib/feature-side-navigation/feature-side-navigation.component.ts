// angular
import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// side-navigation
import { SideNavigationContentAreaDirective } from '../side-navigation-content-area.directive';
import { SideNavigationService } from '../side-navigation.service';

@Component({
  selector: 'shared-feature-side-navigation',
  templateUrl: './feature-side-navigation.component.html',
  styleUrls: ['./feature-side-navigation.component.scss'],
  imports: [SideNavigationContentAreaDirective, MatIconModule],
  standalone: true
})
export class FeatureSideNavigationComponent implements OnInit {
  resizingEvent = {
    isResizing: false,
    startingCursorX: 0,
    startingWidth: 0
  };

  constructor(public sidenavService: SideNavigationService) {}

  @ViewChild(SideNavigationContentAreaDirective, { static: true })
  sidenavContentArea?: SideNavigationContentAreaDirective;

  ngOnInit(): void {
    if (!this.sidenavContentArea) {
      throw new Error('sidenavContentArea is undefined');
    }
    this.sidenavService.setDynamicContentArea(this.sidenavContentArea);
  }

  @HostBinding('class.resizing')
  get isResizing(): boolean {
    return this.resizingEvent.isResizing;
  }

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }

  @HostListener('window:mousemove', ['$event'])
  updateSidenavWidth(event: MouseEvent) {
    if (!this.resizingEvent.isResizing) {
      return;
    }
    const cursorDeltaX = event.clientX - this.resizingEvent.startingCursorX;
    const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;
    this.sidenavService.setSidenavWidth(newWidth);
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizingEvent.isResizing = false;
  }

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.sidenavService.sidenavWidth
    };
  }
}
