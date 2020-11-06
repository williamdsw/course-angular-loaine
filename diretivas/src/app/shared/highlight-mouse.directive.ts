import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  // HostBinding = Define binding a uma propriedade do elemento
  @HostBinding('style.backgroundColor')
  public backgroundColor: string;

  private fontWeight: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {}

  // HostListener = Vai escutar evento da tag que usar essa diretiva
  @HostListener('mouseenter')
  public onMouseEnter(): void {
    // this.renderer.setStyle (this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  public OnMouseLeave(): void {
    // this.renderer.setStyle (this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
    this.fontWeight = 'normal';
  }

  @HostBinding('style.fontWeight')
  public get setFontWeight(): string {
    return this.fontWeight;
  }

}
