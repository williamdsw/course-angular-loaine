import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormularioComponent } from '../alunos/aluno-formulario/aluno-formulario.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormularioComponent> {

  canDeactivate(
    component: AlunoFormularioComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

      console.log ('guarda de desativacao');

      return component.podeMudarRota ();
  }
}
