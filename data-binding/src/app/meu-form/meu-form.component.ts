import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {

  nome: string;
  pessoa: any = {
    nome: 'doom slayer',
    idade: 33
  };

  constructor() {
    this.nome = 'abc';
   }

}
