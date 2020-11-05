import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html'
})
export class OutputPropertyComponent {

  @Input()
  public valor: number;

  // Output property = a propriedade e exposta
  // Emissor de evento
  @Output()
  public mudouValor = new EventEmitter ();

  @ViewChild('campoInput', { static: true })
  public campoValorInput: ElementRef;

  constructor() {
    this.valor = 0;
  }

  public incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  public decrementa(): void {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
