import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {

  // expoe uma propriedade 'nome' para o selector
  @Input() nomeCurso: string;

  constructor() {
    this.nomeCurso = '';
  }


}
