import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, take } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base 
      [nome]="nome" 
      [valor]="valor" 
      estilo="bg-success">
    </app-poc-base>
  `
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome: string = 'Componente com take';
  valor: string;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.enviarValorService.getValor ()
        .pipe (
          tap (v => console.log (this.nome, v)),
          take (1) // Quantas vezes quero tentar a requisicao, bom para simples ajax
        )
        .subscribe (novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log (`${this.nome} foi destruido.`);
  }

}
