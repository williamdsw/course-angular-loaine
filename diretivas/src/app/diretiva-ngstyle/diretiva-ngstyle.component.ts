import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html'
})
export class DiretivaNgstyleComponent implements OnInit {

  public ativo: boolean;
  public tamanhoFonte: number;

  constructor() {
    this.ativo = false;
    this.tamanhoFonte = 16;
   }

  ngOnInit() {
  }

  public mudarAtivo(): void {
    this.ativo = !this.ativo;
  }

}
