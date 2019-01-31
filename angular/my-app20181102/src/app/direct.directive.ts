import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirect]'
})
export class DirectDirective {

  private _defaultColor = 'green';
  private el: HTMLElement;
  @Input('appDirect') int: string;
  // set backgroundColor(colorName:string){
  //   this.setStyle(colorName);
  // };
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.setStyle(this._defaultColor);
  }
  @HostListener('click')
  onClick() {
    this.setStyle(this.int || this._defaultColor);
  }
  private setStyle(color: string) {
    this.el.style.backgroundColor = color;
  }
}
