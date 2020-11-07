import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // FIELDS

  private usuarioAuthenticado: boolean;
  public mostrarMenuEmitter = new EventEmitter<boolean>();
  private fixedUsername = 'usuario@email.com';
  private fixedPassword = '123456';

  // CONSTRUCTOR

  constructor(private router: Router) {
    this.usuarioAuthenticado = false;
  }

  // HELPER FUNCTIONS

  public fazerLogin(usuario: Usuario) {
    if (usuario.nome === this.fixedUsername && usuario.senha === this.fixedPassword) {
      this.usuarioAuthenticado = true;
      this.mostrarMenuEmitter.emit (this.usuarioAuthenticado);
      this.router.navigate(['/']);
    } else {
      this.usuarioAuthenticado = false;
      this.mostrarMenuEmitter.emit (this.usuarioAuthenticado);
    }
  }

  public usuarioEstaAutenticado(): boolean {
    return this.usuarioAuthenticado;
  }
}
