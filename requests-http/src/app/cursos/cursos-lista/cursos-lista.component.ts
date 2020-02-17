import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CursosService } from '../cursos.service';

import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // anotacao ($dollar) para Observable
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.onRefresh ();
  }

  onRefresh() {
    this.cursos$ = this.cursoService.list ().pipe (

      // recomendado ser ultimo operador do pipe
      catchError (error => {
        console.error (error);
        this.error$.next (true);
        return empty ();
      })
    );

    // Outra forma de tratar os erros
    /*
    this.cursoService.list ().subscribe (
      dados => { console.log (dados); },
      error => { console.log (error); },
      () => { console.log ('Observable completo!'); }
    );*/
  }
}
