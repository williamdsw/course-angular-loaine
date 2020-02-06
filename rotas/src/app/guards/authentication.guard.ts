import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {

  // CONSTRUCTOR

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  // OVERRIDED FUNCTIONS

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log ('AuthGuard');
    return this.verificarAcesso ();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    console.log ('canLoad: verificando se o usuario pode carregar o script do modulo');
    return this.verificarAcesso ();
  }

  // HELPER FUNCTIONS

  private verificarAcesso(): boolean {

    if (this.authenticationService.usuarioEstaAutenticado ()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

}
