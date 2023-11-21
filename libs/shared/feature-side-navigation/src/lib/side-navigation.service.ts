// angular
import { Injectable } from '@angular/core';
import type { Type as Component } from '@angular/core';

// side-navigation
import { SideNavigationContentAreaDirective } from './side-navigation-content-area.directive';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  readonly sidenavMinWidth = 250;
  readonly sidenavMaxWidth = window.innerWidth - 300;

  isExpanded = true;
  contentArea?: SideNavigationContentAreaDirective;
  stack = [] as Component<unknown>[];
  isSlidingInFromRight = false;
  isSlidingInFromLeft = false;

  get sidenavTransitionDuration(): number {
    const sidenavTransitionDurationFromCssVariable = getComputedStyle(
      document.body
    ).getPropertyValue('--feature-side-navigation-transition-duration');
    return parseInt(sidenavTransitionDurationFromCssVariable, 10);
  }

  get sidenavWidth(): number {
    return parseInt(
      getComputedStyle(document.body).getPropertyValue(
        '--feature-side-navigation-width'
      ),
      10
    );
  }

  get lastStackItem(): Component<unknown> {
    return this.stack[this.stack.length - 1];
  }

  setSidenavWidth(width: number): void {
    const clampedWidth = Math.min(
      Math.max(width, this.sidenavMinWidth),
      this.sidenavMaxWidth
    );
    document.body.style.setProperty(
      '--feature-side-navigation-width',
      `${clampedWidth}px`
    );
  }

  toggleSidenav(): void {
    this.isExpanded = !this.isExpanded;
  }

  setDynamicContentArea(host: SideNavigationContentAreaDirective): void {
    this.contentArea = host;
  }

  push(component: Component<unknown>): void {
    this.stack.push(component);
    this.setContent(component);
    this.animateInFromTheRight();
  }

  pop(): void {
    if (this.stack.length === 1) {
      return;
    }
    this.stack.pop();
    this.setContent(this.lastStackItem);
    this.animateInFromTheLeft();
  }

  setContent(component: Component<unknown>): void {
    this.contentArea?.viewContainerRef.clear();
    this.contentArea?.viewContainerRef.createComponent(component);
  }

  animateInFromTheLeft(): void {
    this.isSlidingInFromLeft = true;
    setTimeout(() => {
      this.isSlidingInFromLeft = false;
    }, this.sidenavTransitionDuration);
  }

  animateInFromTheRight(): void {
    this.isSlidingInFromRight = true;
    setTimeout(() => {
      this.isSlidingInFromRight = false;
    }, this.sidenavTransitionDuration);
  }
}
