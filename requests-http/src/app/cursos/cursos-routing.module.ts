import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

const ROUTES: Routes = [
  { path: '', component: CursosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
