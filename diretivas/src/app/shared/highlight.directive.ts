import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // FIELDS

  @HostBinding('style.backgroundColor')
  public backgroundColor: string;

  @Input()
  public defaultColor: string;

  @Input()
  public highlightColor: string;

  // CONSTRUCTOR

  constructor() {
    this.defaultColor = 'white';
    this.highlightColor = 'yellow';
   }

  // HELPER FUNCTIONS

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  // LIFE CYCLES HOOKS

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
