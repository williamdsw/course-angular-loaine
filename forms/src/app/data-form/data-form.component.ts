import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DropdownService } from './../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

import { Estado } from './../shared/models/estado';

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
  estados: Estado[] = [];

  // CONSTRUCTOR

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService) {

    this.postUrl = 'https://httpbin.org/post';
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {

    this.inscricao = new Subscription();

    this.dropdownService.getEstadosBr ().subscribe (
      response => { this.estados = response; console.log (this.estados); },
      error => { console.log (error); }
    );

    this.formulario = this.formBuilder.group({
      nome: [null, [ Validators.required, Validators.minLength (3), Validators.maxLength (20) ]],
      email: [null, [ Validators.required, Validators.email ]],

      endereco: this.formBuilder.group ({
        cep: [null, [ Validators.required ]],
        numero: [null, [ Validators.required ]],
        complemento: [null],
        rua: [null, [ Validators.required ]],
        bairro: [null, [ Validators.required ]],
        cidade: [null, [ Validators.required ]],
        estado: [null, [ Validators.required ]],
      })
    });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  // HELPER FUNCTIONS

  onSubmit() {
    console.log (this.formulario);

    if (this.formulario.valid) {
      this.inscricao = this.httpClient.post (this.postUrl, JSON.stringify (this.formulario.value)).subscribe (
        response => {
          console.log (response);
          this.resetar ();
        },
        error => { alert ('erro'); });
    } else {
      console.log ('formulario invalido');
      this.verificaValidacoesForm (this.formulario);
    }
  }

  resetar() {
    this.formulario.reset ();
  }

  verificaValidTouched(campo: string) {
    const formCampo = this.formulario.get (campo);
    return !formCampo.valid;
  }

  verificaEmailInvalido() {
    const email = this.formulario.get ('email');
    if (email.errors) {
      const key = 'email';
      return email.errors[key];
    }
  }

  consultaCEP() {
    const cep = this.formulario.get ('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.inscricao = this.consultaCepService.consultaCEP (cep).subscribe (
        response => { this.populaDadosForm (response); },
        error => { console.log (error); }
      )
    }
  }

  populaDadosForm(dados) {

    if (!('erro' in dados)) {
      this.formulario.patchValue({
        endereco: {
          rua: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf,
        }
      });

      this.formulario.get ('nome').setValue ('Jim');
      this.formulario.get ('email').setValue ('jim@email.com');
    } else {
      this.resetaDadosFormulario ();
      alert ('CEP não encontrado!');
    }
  }

  resetaDadosFormulario() {
    this.formulario.patchValue ({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys (formGroup.controls).forEach (campo => {
      console.log (campo);
      const controle = formGroup.get (campo);
      controle.markAsDirty ();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm (controle);
      }
    });
  }
}
