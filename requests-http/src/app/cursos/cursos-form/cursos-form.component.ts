import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private modalService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // Gerenciado pelo proprio Angular, nao precisa dar unsubscribe manualmente
    this.route.params
    .pipe (
      map ((params: any) => params['id']),            // mapeia valor, nesse caso busca pelo id
      switchMap (id => this.service.loadById (id)))   // utiliza o id retornado, e tenta outro subscribe
    .subscribe (
      (curso: Curso) => {
        this.updateForm (curso);
      }
    )

    // concatMap -> ordem da requisicao importa
    // mergeMap -> order da requisicao nao importa
    // exhaustMap -> casos de Login

    this.form = this.formBuilder.group (
    {
      id: [null],
      nome: [null, [ Validators.required, Validators.minLength (3), Validators.maxLength (250) ]]
    });
  }

  updateForm(curso: Curso) {
    this.form.patchValue ({
      id: curso.id,
      nome: curso.nome
    });
  }

  hasError (field: string) {
    return this.form.get (field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.create (this.form.value).subscribe (
        success => {
          this.modalService.showAlertSuccess ('Criado com sucesso!');
          this.location.back ();
        },
        error => this.modalService.showAlertDanger ('Erro ao criar curso, tente novamente.'),
        () => console.log ('request completo'));
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset ();
  }

}
