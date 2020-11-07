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
    { id: 11, nome: 'Aluno 11', email: 'aluno11@email.com'},
    { id: 12, nome: 'Aluno 12', email: 'aluno12@email.com'},
    { id: 13, nome: 'Aluno 13', email: 'aluno13@email.com'},
    { id: 14, nome: 'Aluno 14', email: 'aluno14@email.com'},
    { id: 15, nome: 'Aluno 15', email: 'aluno15@email.com'},
    { id: 16, nome: 'Aluno 16', email: 'aluno16@email.com'},
    { id: 17, nome: 'Aluno 17', email: 'aluno17@email.com'},
    { id: 18, nome: 'Aluno 18', email: 'aluno18@email.com'},
    { id: 19, nome: 'Aluno 19', email: 'aluno19@email.com'},
    { id: 20, nome: 'Aluno 20', email: 'aluno20@email.com'},
  ];

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  getAlunos() {
    return this.alunos;
  }

  public getAlunoById(id: number): Aluno {
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
