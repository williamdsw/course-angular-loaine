import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // FIELDS

  private usuarioAuthenticado: boolean;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  // CONSTRUCTOR

  constructor(private router: Router) {
    this.usuarioAuthenticado = false;
  }

  // HELPER FUNCTIONS

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAuthenticado = true;
      this.mostrarMenuEmitter.emit (true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAuthenticado = false;
      this.mostrarMenuEmitter.emit (false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAuthenticado;
  }
}
