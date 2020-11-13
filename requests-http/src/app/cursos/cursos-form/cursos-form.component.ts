import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html'
})
export class CursosFormComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

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
        nome: [
          curso.nome,
          [Validators.required, Validators.minLength(3), Validators.maxLength(250)]
        ]
    });
  }

  public hasError(field: string): ValidationErrors {
    return this.form.get (field).errors;
  }

  public onSubmit(): void {

    let successMessage = 'Criado com sucesso!';
    let errorMessage = 'Erro ao criar curso, tente novamente.';

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

  public onCancel(): void {
    this.submitted = false;
    this.form.reset ();
  }

}
