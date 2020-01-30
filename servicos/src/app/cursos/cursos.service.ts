import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    // FIELDS

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    // HELPER FUNCTIONS

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push (curso);
    }

}
