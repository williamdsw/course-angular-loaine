import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, empty } from 'rxjs';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { DropdownService } from './../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { VerificaEmailService } from './services/verifica-email.service';

import { Estado } from './../shared/models/estado';
import { Cargo } from '../shared/models/cargos';
import { Tecnologia } from '../shared/models/tecnologias';
import { FormValidations } from '../shared/form-validations';

import { BaseFormComponent } from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit, OnDestroy {

  // FIELDS

  private inscricao: Subscription;
  private postUrl: string;
  estados: Observable<Estado[]>;
  cargos: Cargo[];
  tecnologias: Tecnologia[];
  newsletter: any[];
  frameworks: string[] = ['Angular', 'React', 'Vue', 'Sencha'];

  // CONSTRUCTOR

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService) {

      super ();
      this.postUrl = 'https://httpbin.org/post';
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {

    this.inscricao = new Subscription();

    // Buscando dados dos Selects
    this.estados = this.dropdownService.getEstadosBr ();
    this.cargos = this.dropdownService.getCargos ();
    this.tecnologias = this.dropdownService.getTecnologias ();
    this.newsletter = this.dropdownService.getNewsletter ();

    // Inicializando form
    this.formulario = this.formBuilder.group({
      teste: [null],
      nome: [null, [ Validators.required, Validators.minLength (3), Validators.maxLength (20) ]],
      email: [null, [ Validators.required, Validators.email ], [this.verificarEmail.bind (this)]],
      confirmarEmail: [null, [FormValidations.equalsTo ('email')]],

      endereco: this.formBuilder.group ({
        cep: [null, [ Validators.required, FormValidations.cepValidator ]],
        numero: [null, [ Validators.required ]],
        complemento: [null],
        rua: [null, [ Validators.required ]],
        bairro: [null, [ Validators.required ]],
        cidade: [null, [ Validators.required ]],
        estado: [null, [ Validators.required ]],
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks ()
    });

    this.formulario.get ('endereco.cep').statusChanges.pipe (
      distinctUntilChanged (),
      tap (value => { console.log ('valor CEP: ', value) }),
      switchMap (status => status === 'VALID' ? this.consultaCepService.consultaCEP (this.formulario.get ('endereco.cep').value) : empty ())
    ).subscribe (dados => dados ? this.populaDadosForm (dados) : {});

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  // HELPER FUNCTIONS

  submit() {
    let valueSubmit = Object.assign ({}, this.formulario.value);
    valueSubmit = Object.assign (valueSubmit, {
      frameworks: valueSubmit.frameworks
                             .map ((value, index) => value ? this.frameworks[index] : null)
                             .filter (value => value != null)
    });

    this.inscricao = this.httpClient.post (this.postUrl, JSON.stringify (valueSubmit)).subscribe (
      response => {
        console.log (response);
        this.resetar ();
      },
      error => { alert ('erro'); });
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

  setarCargo() {
    const cargo: Cargo = { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'};
    this.formulario.get('cargo').setValue (cargo);
  }

  compararCargos(cargo1: Cargo, cargo2: Cargo) {
    return cargo1 && cargo2 ? (cargo1.nome === cargo2.nome && cargo1.nivel === cargo2.nivel) : cargo1 === cargo2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias').setValue (['java', 'javascript', 'php']);
  }

  buildFrameworks() {

    const values = this.frameworks.map (value => new FormControl (false));
    return this.formBuilder.array (values, FormValidations.requiredMinCheckbox (2));
  }

  verificarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail (formControl.value).pipe (
      map (emailExiste => emailExiste ? { emailInvalido: true } : null));
  }
}
