import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';

import { AuthenticationService } from './login/authentication.service';

import { AuthenticationGuard } from './guards/authentication.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
