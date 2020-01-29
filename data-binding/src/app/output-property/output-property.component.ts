import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor: number;

  // Output property = a propriedade e exposta
  // Emissor de evento
  @Output() mudouValor = new EventEmitter ();

  @ViewChild('campoInput', { static: true })
  campoValorInput: ElementRef;

  constructor() {
    this.valor = 0;
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
