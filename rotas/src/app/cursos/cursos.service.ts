import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // FIELDS

  public cursos = [
    { id: 1, nome: 'Angular 2' },
    { id: 2, nome: 'Java' },
    { id: 3, nome: 'PHP' },
    { id: 4, nome: 'React' },
    { id: 5, nome: 'HTML' },
  ];

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  public getCursos(): any[] {
    return this.cursos;
  }

  public getCursoById(id: number): {} {

    if (id === undefined || id === null) {
      return null;
    }

    if (typeof id === 'string') {
      id = parseInt (id, 10);
    }

    for (const curso of this.cursos) {
      if (curso.id === id) {
        return curso;
      }
    }

    return null;
  }
}
