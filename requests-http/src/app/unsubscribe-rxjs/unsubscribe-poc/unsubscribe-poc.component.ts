import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes: boolean = true;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
  }

  emitirValor(valor: string) {
    this.enviarValorService.emitirValor (valor);
  }

  destruirCompontentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }

}
