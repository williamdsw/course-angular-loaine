import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';
import { MaterialModule } from './../material/material.module';

import { AlunosService } from './alunos.service';

import { AlunosComponent } from './alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
