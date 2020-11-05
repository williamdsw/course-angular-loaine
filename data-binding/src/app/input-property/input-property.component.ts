import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html'
})
export class InputPropertyComponent {

  // expoe uma propriedade 'nome' para o selector
  @Input()
  public nomeCurso: string;

  constructor() {
    this.nomeCurso = '';
  }
}
