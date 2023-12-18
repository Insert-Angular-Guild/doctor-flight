import { Directive, HostBinding, Input } from '@angular/core';

export interface StylingShadow {
  color: string;
  type: 'SOLID' | 'MEDIUM' | 'LIGHT';
}

const COLOR_100: string = '#79bd9a';

export const SOLID_100: StylingShadow = { color: COLOR_100, type: 'SOLID' };
export const MEDIUM_100: StylingShadow = { color: COLOR_100, type: 'MEDIUM' };
export const LIGHT_100: StylingShadow = { color: COLOR_100, type: 'LIGHT' };

@Directive({
  standalone: true,
  selector: '[stylingShadow]'
})
export class ShadowDirective {
  @Input() set stylingShadowInput(stylingShadow: StylingShadow) {
    this.boxShadow = this.mapToBoxShadow(stylingShadow);
    return;
  }

  @HostBinding('style.box-shadow')
  boxShadow: string = `#79bd9a 0px 4px 16px, #79bd9a 0px 8px 24px, #79bd9a 0px 16px 56px`;

  mapToBoxShadow(stylingShadow: StylingShadow): string {
    if (stylingShadow.type === 'SOLID') {
      return this.solid(stylingShadow.color);
    } else if (stylingShadow.type === 'MEDIUM') {
      return this.medium(stylingShadow.color);
    } else {
      return this.light(stylingShadow.color);
    }
  }

  solid = (colorInput: string): string => {
    return `
     ${colorInput} 0px 19px 38px,
     ${colorInput} 0px 15px 12px`;
  };
  medium = (colorInput: string): string => {
    return `
      ${colorInput} 0px 1px 2px,
      ${colorInput} 0px 2px 4px,
      ${colorInput} 0px 4px 8px,
      ${colorInput} 0px 8px 16px,
      ${colorInput} 0px 16px 32px,
      ${colorInput} 0px 32px 64px`;
  };
  light = (colorInput: string): string => {
    return `
    ${colorInput} 0px 1px 4px,
    ${colorInput} 0px 0px 0px 3px`;
  };
}
