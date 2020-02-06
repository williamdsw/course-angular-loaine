import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  // CONSTRUCTOR

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  // OVERRIDED FUNCTIONS

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log ('AuthGuard');

    if (this.authenticationService.usuarioEstaAutenticado ()) {
      return true;
    }

    this.router.navigate (['/login']);

    return false;
  }

}

