import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base 
      [nome]="nome" 
      [valor]="valor$ | async" 
      estilo="bg-success">
    </app-poc-base>
  `
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome: string = 'Componente com async';
  valor$: Observable<string>;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.valor$ = this.enviarValorService.getValor ()
        .pipe (tap (v => console.log (this.nome, v)));
  }

  ngOnDestroy() {
    console.log (`${this.nome} foi destruido.`);
  }

}
