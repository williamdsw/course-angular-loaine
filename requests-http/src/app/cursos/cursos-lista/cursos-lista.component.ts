import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { CursosService } from '../cursos.service';

import { Curso } from '../curso';

import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

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

  constructor(
    private cursoService: CursosService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh ();
  }

  onRefresh() {
    this.cursos$ = this.cursoService.list ().pipe (

      // recomendado ser ultimo operador do pipe
      catchError (error => {
        console.error (error);
        this.error$.next (true);
        this.handleError ();
        return empty ();
      })
    );
  }

  handleError() {
    this.alertModalService.showAlertDanger ('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id: number) {
    this.router.navigate (['editar', id], { relativeTo: this.route });
  }
}
