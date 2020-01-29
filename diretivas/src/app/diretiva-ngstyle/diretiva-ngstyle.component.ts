import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean;
  tamanhoFonte: number;

  constructor() {
    this.ativo = false;
    this.tamanhoFonte = 16;
   }

  ngOnInit() {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
