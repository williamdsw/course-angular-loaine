import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'data-binding';
  public valor: number;
  public deletarCiclo: boolean;

  constructor() {
    this.valor = 5;
    this.deletarCiclo = false;
  }

  public mudarValor(): void {
    this.valor++;
  }

  public destruirCiclo(): void {
    this.deletarCiclo = true;
  }
}
