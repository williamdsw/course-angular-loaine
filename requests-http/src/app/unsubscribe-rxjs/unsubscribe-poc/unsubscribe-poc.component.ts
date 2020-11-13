import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html'
})
export class UnsubscribePocComponent implements OnInit {

  public mostrarComponentes = true;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {}

  public emitirValor(valor: string): void {
    this.enviarValorService.emitirValor (valor);
  }

  public destruirCompontentes(): void {
    this.mostrarComponentes = !this.mostrarComponentes;
  }

}
