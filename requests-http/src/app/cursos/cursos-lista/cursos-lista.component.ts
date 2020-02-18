import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY, Subject } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
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

  cursoSelecionado: Curso;

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
        return EMPTY;
      })
    );
  }

  handleError() {
    this.alertModalService.showAlertDanger ('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id: number) {
    this.router.navigate (['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
     const result$ = this.alertModalService.showConfirm ('Confirmação', 'Tem certeza que deseja remover esse curso?');
     result$.asObservable ().pipe (
       take (1),
       switchMap (result => result ? this.cursoService.remove (curso) : EMPTY)
     )
     .subscribe ( // 'subscribe' so sera executado quando 'result' for TRUE
        success => {
          this.onRefresh ();
          this.alertModalService.showAlertSuccess ('Curso removido com sucesso!');
        },
        error => this.alertModalService.showAlertDanger ('Erro ao excluir o curso')
     );
  }
}
