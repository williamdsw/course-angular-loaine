import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

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
    private location: Location) { }

  ngOnInit() {
    this.form = this.formBuilder.group (
    {
      nome: [null, [ Validators.required, Validators.minLength (3), Validators.maxLength (250) ]]
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
