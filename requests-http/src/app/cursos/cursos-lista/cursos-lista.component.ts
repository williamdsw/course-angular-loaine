import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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

  deleteModalRef: BsModalRef;
  @ViewChild ('deleteModal', { static: true }) template;

  constructor(
    private cursoService: CursosService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService) { }

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

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    console.log (this.cursoSelecionado);
    this.deleteModalRef = this.modalService.show (this.template, { class: 'modal-sm'});
  }

  onDeclineDelete() {
    this.deleteModalRef.hide ();
  }

  onConfirmDelete() {
    this.deleteModalRef.hide ();
    this.cursoService.remove (this.cursoSelecionado).subscribe (
      success => {
        this.onRefresh ();
        this.alertModalService.showAlertSuccess ('Curso removido com sucesso!');
      },
      error => this.alertModalService.showAlertDanger ('Erro ao excluir o curso')
    );
  }
}
