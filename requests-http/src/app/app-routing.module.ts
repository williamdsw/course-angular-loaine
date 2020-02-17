import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  { path: 'cursos', loadChildren: () => import ('./cursos/cursos.module').then (mod => mod.CursosModule) },
  { 
    path: 'rxjs-poc',
    loadChildren: () => import ('./unsubscribe-rxjs/unsubscribe-rxjs.module').then (mod => mod.UnsubscribeRxjsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
