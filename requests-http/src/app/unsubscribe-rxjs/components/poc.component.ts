import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base 
      [nome]="nome" 
      [valor]="valor" 
      estilo="bg-success">
    </app-poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome: string = 'Componente sem unsubscribe';
  valor: string;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.enviarValorService.getValor ()
        .pipe (tap (v => console.log (this.nome, v)))
        .subscribe (novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log (`${this.nome} foi destruido.`);
  }
}
