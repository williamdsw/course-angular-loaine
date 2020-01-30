import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // FIELDS

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  // CONSTRUCTOR

  constructor() {
    this.defaultColor = 'white';
    this.highlightColor = 'yellow';
   }

  // HELPER FUNCTIONS

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  // LIFE CYCLES HOOKS

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
