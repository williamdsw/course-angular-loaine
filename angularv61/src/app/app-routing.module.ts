import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { KeyValueComponent } from './key-value/key-value.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';

const ROUTES: Routes = [
  { path: 'keyvalue', component: KeyValueComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'url-invalida', component: KeyValueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    // habilita restauracao da posicao do scroll
    scrollPositionRestoration: 'enabled',

    // trata caso de url mal informada (exemplo com %)
    malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => {
      console.log (url);
      return urlSerializer.parse ('/url-invalida');
    },

    // Seta para o navegador carregar url primeiro antes de saber se pode navegar
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
