import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  @HostBinding('style.boxShadow')
  boxShadow = '2px 2px 12px #3f51b5';

  constructor() { }
  @HostListener('mouseenter') mouseOver(): any {
    this.boxShadow = '2px 2px 12px #ff4081';
  }

  @HostListener('mouseleave') mouseLeave(): any {
    this.boxShadow = '2px 2px 12px #3f51b5';
  }

}
