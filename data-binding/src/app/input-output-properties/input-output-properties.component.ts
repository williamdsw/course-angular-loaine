import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html'
})
export class InputOutputPropertiesComponent {

  public nomeDoCurso: string;
  public valorInicial: number;

  constructor() {
    this.nomeDoCurso = 'Angular';
    this.valorInicial = 15;
  }

  public onMudouValor(event): void {
    console.log (event.novoValor);
  }
}
