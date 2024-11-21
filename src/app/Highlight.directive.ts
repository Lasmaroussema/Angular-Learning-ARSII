import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hightlight]',
  standalone: true
})
export class HighlightDirective {

  constructor( private el:ElementRef,private rendrer:Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter(){
    this.changeColor('blue');
  }
  @HostListener('mouseenter') OnMouseLeave(){
    this.changeColor('');
  }
  
  changeColor(value:String){
    this.rendrer.setStyle(this.el.nativeElement,'backgroundColor',value);
  }

}
