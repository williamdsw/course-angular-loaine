import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // Lista todos components, diretivas e pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  // Lista todos modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  // Lista todos servicos disponiveis para todos componentes
  providers: [],

  // Qual componente que deve ser o container da aplicacao (primeiro)
  bootstrap: [AppComponent]
})
export class AppModule { }
