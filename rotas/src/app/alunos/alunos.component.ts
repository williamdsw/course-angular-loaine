import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  // FIELDS

  public alunos: any[] = [];

  // CONSTRUCTOR

  constructor(private alunoService: AlunosService) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos ();
  }

}
