import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  // FIELDS

  public formulario: FormGroup;

  // CONSTRUCTOR

  constructor() { }

  ngOnInit(): void {
  }

  // ABSTRACT FUNCTIONS

  public abstract submit(): void;

  // HELPER FUNCTIONS

  public onSubmit(): void {
    if (this.formulario.valid) {
      this.submit();
    }
    else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  public verificaValidacoesForm(formGroup: FormGroup | FormArray): void {
    Object.keys (formGroup.controls).forEach (campo => {
      const controle = formGroup.get (campo);
      controle.markAsDirty ();
      controle.markAsTouched ();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm (controle);
      }
    });
  }

  public verificaValidTouched(campo: string): boolean {
    const formCampo = this.formulario.get (campo);
    return !formCampo.valid;
  }

  public verificaTemError(campo: string, error: string): boolean {
    if (campo && error) {
      const formCampo = this.formulario.get (campo);
      return formCampo.hasError (error);
    }

    return false;
  }

  public verificaEmailInvalido(): boolean | void {
    const email = this.formulario.get ('email');
    if (email.errors) {
      const key = 'email';
      return email.errors[key];
    }
  }

  public getCampo(campo: string): FormArray {
    return this.formulario.get (campo) as FormArray;
  }

  public resetar() {
    this.formulario.reset ();
  }
}
