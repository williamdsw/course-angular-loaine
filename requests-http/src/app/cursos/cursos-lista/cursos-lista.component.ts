import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // anotacao ($dollar) para Observable
  public cursos$: Observable<Curso[]>;
  public error$ = new Subject<boolean>();

  public cursoSelecionado: Curso;

  constructor(
    private cursoService: CursosService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh ();
  }

  public onRefresh(): void {
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

  private handleError(): void {
    this.alertModalService.showAlertDanger ('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  public onEdit(id: number): void {
    this.router.navigate (['editar', id], { relativeTo: this.route });
  }

  public onDelete(curso: Curso): void {
    this.cursoSelecionado = curso;
    const confirmMessage = 'Tem certeza que deseja remover esse curso?';
     const result$ = this.alertModalService.showConfirm('Confirmação', confirmMessage);
     result$.asObservable().pipe (
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
