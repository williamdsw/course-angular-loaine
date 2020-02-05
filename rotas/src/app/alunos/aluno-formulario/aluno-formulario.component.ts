import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit, OnDestroy {

  // FIELDS

  private aluno: any;
  private inscricao: Subscription;
  private formMudou: boolean;

  // CONSTRUCTOR

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) {
    this.formMudou = false;
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.inscricao = this.route.params.subscribe (
      (params: any) => {
        const key = 'id';
        const id = params[key];
        this.aluno = this.alunoService.getAlunoById (id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      },
      error => { console.log (error); });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe ();
  }

  // HELPER FUNCTIONS

  onInput() {
    this.formMudou = true;
    console.log ('mudou');
  }

  podeMudarRota() {

    if (this.formMudou) {
      confirm ('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

}
