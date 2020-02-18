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
    const key = 'curso';
    const curso: Curso = this.route.snapshot.data[key];

    this.form = this.formBuilder.group (
    {
      id: [curso.id],
      nome: [curso.nome, [ Validators.required, Validators.minLength (3), Validators.maxLength (250) ]]
    });
  }

  hasError (field: string) {
    return this.form.get (field).errors;
  }

  onSubmit() {

    let successMessage: string = 'Criado com sucesso!';
    let errorMessage: string = 'Erro ao criar curso, tente novamente.';

    this.submitted = true;
    if (this.form.valid) {

      if (this.form.value.id) {
        successMessage = 'Atualizado com sucesso!';
        errorMessage = 'Erro ao atualizar curso, tente novamente.';
      }

      this.service.save (this.form.value).subscribe (
        success => {
          this.modalService.showAlertSuccess (successMessage);
          this.location.back ();
        },
        error => this.modalService.showAlertDanger (errorMessage),
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset ();
  }

}
