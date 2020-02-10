import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit, OnDestroy {

  // FIELDS

  formulario: FormGroup;
  private inscricao: Subscription;
  private postUrl: string;

  // CONSTRUCTOR

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) {

    this.postUrl = 'https://httpbin.org/post';
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {

    this.inscricao = new Subscription();

    this.formulario = this.formBuilder.group({
      nome: [null, [
        Validators.required,
        Validators.minLength (3),
        Validators.maxLength (20),
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
    });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  // HELPER FUNCTIONS

  onSubmit() {
    console.log (this.formulario);

    this.inscricao = this.httpClient.post (this.postUrl, JSON.stringify (this.formulario.value)).subscribe (
      response => {
        console.log (response);

        this.resetar ();
      },
      error => { alert ('erro'); });
  }

  resetar() {
    this.formulario.reset ();
  }

  verificaValidTouched(campo) {
    campo = this.formulario.get (campo);
    return !campo.valid && campo.touched;
  }

  verificaEmailInvalido() {
    const email = this.formulario.get ('email');
    if (email.errors) {
      const key = 'email';
      return email.errors[key];
    }
  }

}
