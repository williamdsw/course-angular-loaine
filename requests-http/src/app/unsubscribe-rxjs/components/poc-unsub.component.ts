import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base 
      [nome]="nome" 
      [valor]="valor" 
      estilo="bg-success">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  nome: string = 'Componente com unsubscribe';
  valor: string;

  subs: Subscription[] = [];

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.subs.push (this.enviarValorService.getValor ()
        .pipe (tap (v => console.log (this.nome, v)))
        .subscribe (novoValor => this.valor = novoValor));
  }

  ngOnDestroy() {
    this.subs.forEach (sub => { sub.unsubscribe (); });
    console.log (`${this.nome} foi destruido.`);
  }

}
