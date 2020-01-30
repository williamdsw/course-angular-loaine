import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [CursosService], // escopo global
  bootstrap: [AppComponent]
})
export class AppModule { }
