import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  // CONSTRUCTOR

  // TemplateRef = referencia ao <template>
  // ViewContainerRef = referencia ao conteudo do <template>

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  // INPUT FUNCTIONS

  @Input()
  public set ngElse(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView (this.templateRef);
    } else {
      this.viewContainerRef.clear ();
    }
  }
}
