import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html'
})
export class OperadorElvisComponent implements OnInit {

  public tarefa: any = {
    descricao: 'Descrição da Tarefa',
    responsavel: {
      usuario: null
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
