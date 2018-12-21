import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) {
  }

  @Input('appHightlight') highlightColor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.hightlight(this.highlightColor||'red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hightlight(null);
  }

  private hightlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
