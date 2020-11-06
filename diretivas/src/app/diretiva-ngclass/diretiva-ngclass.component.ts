import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html'
})
export class DiretivaNgclassComponent implements OnInit {

  public meuFavorito: boolean;

  constructor() {
    this.meuFavorito = false;
   }

  ngOnInit() {
  }

  public onClick(): void {
    this.meuFavorito = !this.meuFavorito;
  }

}
