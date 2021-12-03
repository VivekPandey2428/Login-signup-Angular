import { Directive, ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el:ElementRef) { 
  }
  private highlight(color:string){
    this.el.nativeElement.style.border=color;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('2px solid yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

}
