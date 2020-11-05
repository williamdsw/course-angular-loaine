import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html'
})
export class MeuFormComponent {

  public nome: string;
  public pessoa: any = {
    nome: 'doom slayer',
    idade: 33
  };

  constructor() {
    this.nome = 'abc';
   }
}
