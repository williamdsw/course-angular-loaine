import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  // FIELDS

  protected formulario: FormGroup;

  // CONSTRUCTOR

  constructor() { }

  ngOnInit(): void {
  }

  // ABSTRACT FUNCTIONS

  abstract submit();

  // HELPER FUNCTIONS

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    }
    else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys (formGroup.controls).forEach (campo => {
      const controle = formGroup.get (campo);
      controle.markAsDirty ();
      controle.markAsTouched ();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm (controle);
      }
    });
  }

  verificaValidTouched(campo: string) {
    const formCampo = this.formulario.get (campo);
    return !formCampo.valid;
  }

  verificaTemError(campo: string, error: string) {

    if (campo && error) {
      const formCampo = this.formulario.get (campo);
      return formCampo.hasError (error);
    }

    return false;
  }

  verificaEmailInvalido() {
    const email = this.formulario.get ('email');
    if (email.errors) {
      const key = 'email';
      return email.errors[key];
    }
  }

  getCampo(campo: string) {
    return this.formulario.get (campo);
  }

  resetar() {
    this.formulario.reset ();
  }
}
