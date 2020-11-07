import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  // FIELDS

  public aluno: any;
  private inscricao: Subscription;

  // CONSTRUCTOR

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {

    console.log ('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe (
      (info) => {
        console.log ('Recebendo o objeto Aluno do resolver');

        // mesmo nome do alunos.routing do resolve
        this.aluno = info.aluno;
      },
      error => console.log (error)
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe ();
  }

  // HELPER FUNCTIONS

  editarContato() {
    this.router.navigate (['/alunos', this.aluno.id, 'editar']);
  }

}
