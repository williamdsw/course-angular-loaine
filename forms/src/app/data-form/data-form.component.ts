import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, EMPTY } from 'rxjs';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { DropdownService } from './../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { VerificaEmailService } from './services/verifica-email.service';

import { Estado } from './../shared/models/estado';
import { Cidade } from './../shared/models/cidade';
import { Cargo } from '../shared/models/cargos';
import { Tecnologia } from '../shared/models/tecnologia';
import { FormValidations } from '../shared/form-validations';

import { BaseFormComponent } from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html'
})
export class DataFormComponent extends BaseFormComponent implements OnInit, OnDestroy {

  // FIELDS

  private inscricao$: Subscription;
  private postUrl: string;
  public estados: Observable<Estado[]>;
  public cidades: Cidade[] = [];
  public cargos: Cargo[];
  public tecnologias: Tecnologia[];
  public newsletter: any[];
  public frameworks: string[] = [
    'Angular', 'React', 'Vue', 'Sencha'
  ];

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

    this.inscricao$ = new Subscription();

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

    this.formulario.get('endereco.cep').statusChanges.pipe(
      distinctUntilChanged(),
      tap(value => {
        console.log('valor CEP: ', value);
      }),
      switchMap(status => {
        if (status === 'VALID') {
          const cep = this.formulario.get('endereco.cep').value;
          return this.consultaCepService.consultaCEP(cep);
        }

        return EMPTY;
      })
    ).subscribe (dados => dados ? this.populaDadosForm (dados) : {});

    this.formulario.get ('endereco.estado').valueChanges.pipe (
      tap (estado => console.log ('Novo estado: ', estado)),
      switchMap (sigla => this.estados.pipe (
        map (est => est.filter (estado => estado.sigla === sigla)),
        map (est => est[0].id),
        switchMap (estadoId => this.dropdownService.getCidades (Number(estadoId)).pipe (
          map ((cidades: Cidade[]) => this.cidades = cidades)
        ))
      ))
    )
    .subscribe (console.log);
  }

  ngOnDestroy() {
    this.inscricao$.unsubscribe();
  }

  // HELPER FUNCTIONS

  public submit(): void {
    let valueSubmit = Object.assign ({}, this.formulario.value);
    valueSubmit = Object.assign (valueSubmit, {
      frameworks: valueSubmit.frameworks
                             .map ((value, index) => value ? this.frameworks[index] : null)
                             .filter (value => value != null)
    });

    this.inscricao$ = this.httpClient.post (this.postUrl, JSON.stringify (valueSubmit)).subscribe (
      response => {
        console.log (response);
        this.resetar ();
      },
      error => { alert ('erro: ' + error); });
  }

  public consultaCEP(): void {
    const cep = this.formulario.get ('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.inscricao$ = this.consultaCepService.consultaCEP(cep).subscribe(
        response => { this.populaDadosForm(response); },
        error => { console.log(error); }
      );
    }
  }

  public populaDadosForm(dados): void {

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
    }
    else {
      this.resetaDadosFormulario ();
      alert ('CEP não encontrado!');
    }
  }

  public resetaDadosFormulario(): void {
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

  public setarCargo(): void {
    const cargo: Cargo = { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'};
    this.formulario.get('cargo').setValue (cargo);
  }

  public compararCargos(cargo1: Cargo, cargo2: Cargo): boolean {
    return cargo1 && cargo2 ? (cargo1.nome === cargo2.nome && cargo1.nivel === cargo2.nivel) : cargo1 === cargo2;
  }

  public setarTecnologias(): void {
    const techs: string[] = ['java', 'javascript', 'php'];
    this.formulario.get('tecnologias').setValue (techs);
  }

  public buildFrameworks(): FormArray {
    const values = this.frameworks.map (value => new FormControl (false));
    return this.formBuilder.array (values, FormValidations.requiredMinCheckbox (2));
  }

  public verificarEmail(formControl: FormControl): any {
    return this.verificaEmailService.verificarEmail (formControl.value).pipe (
      map (emailExiste => emailExiste ? { emailInvalido: true } : null));
  }
}
