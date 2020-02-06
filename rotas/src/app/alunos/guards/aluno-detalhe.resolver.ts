import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Aluno } from './../aluno';

import { AlunosService } from './../alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    // CONSTRUCTORS

    constructor(private alunosService: AlunosService) { }

    // OVERRIDED FUNCTIONS

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        console.log('AlunoDetalheResolver');

        const key = 'id';
        const id = route.params[key];
        return this.alunosService.getAlunoById(id);
    }
}
