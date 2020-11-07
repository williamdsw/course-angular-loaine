import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log ('AlunosGuard: Guarda de rota filha');

      if (state.url.includes ('editar')) {
        // alert('Usuario sem acesso');
        // return of (false);
      }

      return true;
  }
}
