import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { CursosGuard } from './guards/cursos.guard';

const ROUTES: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import ('./cursos/cursos.module').then (mod => mod.CursosModule),
    canActivate: [AuthenticationGuard], // verifica rota base
    canActivateChild: [CursosGuard], // verifica rotas filhas
    canLoad: [AuthenticationGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import ('./alunos/alunos.module').then (mod => mod.AlunosModule),
    canActivate: [AuthenticationGuard],
    canLoad: [AuthenticationGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redireciona para /home
  { path: '**', component: PaginaNaoEncontradaComponent }, // ou pode redirecionar para login
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
