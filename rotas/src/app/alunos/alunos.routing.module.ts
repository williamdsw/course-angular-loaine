import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

const ALUNOS_ROUTES: Routes = [
    {
        path: '', component: AlunosComponent, children: [ // rotas filhas
            { path: 'novo', component: AlunoFormularioComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormularioComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild (ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}
