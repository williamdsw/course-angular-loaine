import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
  { path: 'cursos', loadChildren: () => import ('./cursos/cursos.module').then (mod => mod.CursosModule)},
  { path: 'alunos', loadChildren: () => import ('./alunos/alunos.module').then (mod => mod.AlunosModule)},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
