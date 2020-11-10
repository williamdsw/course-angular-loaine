import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit, OnDestroy {

  // FIELDS

  public usuario: any = {
    nome: null,
    email: null
  };

  private inscricao$: Subscription;
  private postUrl: string;

  // CONSTRUCTOR

  constructor(
    private httpClient: HttpClient,
    private consultaCepService: ConsultaCepService) {
      this.postUrl = 'https://httpbin.org/post';
  }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.inscricao$ = new Subscription ();
  }

  ngOnDestroy() {
    this.inscricao$.unsubscribe ();
  }

  // HELPER FUNCTIONS

  public onSubmit(formulario): void {
    console.log(formulario);
    this.inscricao$ = this.httpClient.post (this.postUrl, JSON.stringify (formulario.value)).subscribe (
      response => {
        console.log (response);
        formulario.form.reset ();
      },
      error => { console.log (error); });
  }

  public consultaCEP(cep: string, form): void {
    if (cep != null && cep !== '') {
      this.inscricao$ = this.consultaCepService.consultaCEP(cep).subscribe(
        response => { this.populaDadosForm(response, form); },
        error => { console.log(error); }
      );
    }
  }

  public populaDadosForm(dados, formulario): void {
    if (!('erro' in dados)) {
      formulario.form.patchValue({
        endereco: {
          rua: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });
    }
    else {
      this.resetaDadosFormulario (formulario);
      alert ('CEP não encontrado!');
    }
  }

  public resetaDadosFormulario(formulario) {
    formulario.form.patchValue ({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
