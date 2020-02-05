import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationGuard } from './guards/authentication.guard';

const ROUTES: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import ('./cursos/cursos.module').then (mod => mod.CursosModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import ('./alunos/alunos.module').then (mod => mod.AlunosModule), 
    canActivate: [AuthenticationGuard]
  },
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
