import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  // ElementRef = referencia ao elemento que usa essa diretiva
  // Renderer = Modifica propriedades do elemento, mas de forma mais segura que ElementRef
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    // console.log (this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.renderer.setStyle (this.elementRef.nativeElement, 'background-color', 'yellow');
   }

}
