import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  botaoClicado() {
    alert ('Botão clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    const input = (event.target as HTMLInputElement);
    this.valorAtual = input.value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
