import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    // FIELDS

    public static criouNovoCurso = new EventEmitter<string>();
    public emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = [
        'Angular 2', 'Java', 'Phonegap'
    ];

    // CONSTRUCTOR

    constructor(private logService: LogService) {}

    // HELPER FUNCTIONS

    public getCursos(): string[] {
        this.logService.consoleLog ('Obtendo lista de cursos');
        return this.cursos;
    }

    public addCurso(curso: string): void {
        this.logService.consoleLog (`Criando um novo curso ${curso}`);
        this.cursos.push (curso);
        this.emitirCursoCriado.emit (curso);
        CursosService.criouNovoCurso.emit (curso);
    }
}
