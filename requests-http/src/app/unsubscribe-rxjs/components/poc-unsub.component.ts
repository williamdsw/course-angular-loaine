import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base
      [nome]="nome" [valor]="valor" estilo="bg-success">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  public nome = 'Componente com unsubscribe';
  public valor: string;

  public subs: Subscription[] = [];

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.subs.push (this.enviarValorService.getValor ()
        .pipe (tap (v => console.log (this.nome, v)))
        .subscribe (novoValor => this.valor = novoValor));
  }

  ngOnDestroy() {
    this.subs.forEach (sub => sub.unsubscribe());
    console.log (`${this.nome} foi destruido.`);
  }

}
