import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  // FIELDS

  public aluno: any;
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

  public onInput(): void {
    this.formMudou = true;
    console.log ('mudou');
  }

  public podeMudarRota(): boolean {

    if (this.formMudou) {
      confirm ('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  // OVERRIDED FUNCTIONS

  public podeDesativar(): boolean {
    return this.podeMudarRota ();
  }
}
