import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  // FIELDS

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
    { id: 4, nome: 'Aluno 04', email: 'aluno04@email.com'},
    { id: 5, nome: 'Aluno 05', email: 'aluno05@email.com'},
    { id: 6, nome: 'Aluno 06', email: 'aluno06@email.com'},
    { id: 7, nome: 'Aluno 07', email: 'aluno07@email.com'},
    { id: 8, nome: 'Aluno 08', email: 'aluno08@email.com'},
    { id: 9, nome: 'Aluno 09', email: 'aluno09@email.com'},
    { id: 10, nome: 'Aluno 10', email: 'aluno10@email.com'},
  ];

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: number) {
    if (id === undefined || id === null) {
      return null;
    }

    if (typeof id === 'string') {
      id = parseInt (id, 10);
    }

    for (const aluno of this.alunos) {
      if (aluno.id === id) {
        return aluno;
      }
    }

    return null;
  }
}
