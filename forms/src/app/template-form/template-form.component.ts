import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, OnDestroy {

  // FIELDS

  usuario: any = {
    nome: null,
    email: null
  };

  private inscricao: Subscription;

  // CONSTRUCTOR

  constructor(private httpClient: HttpClient) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe ();
  }

  // HELPER FUNCTIONS

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  consultaCEP(cep: string, form) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const VALIDA_CEP = /^[0-9]{8}$/;
      if (VALIDA_CEP.test(cep)) {

        this.resetaDadosFormulario (form);

        this.inscricao = this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe (
          response => { this.populaDadosForm (response, form); },
          error => { console.log(error); });
      }
    }
  }

  populaDadosForm(dados, formulario) {

    if (!('erro' in dados)) {
      /*
      formulario.setValue ({
        nome: formulario.value.nome,
        email: formulario.value.email,
        endereco: {
          rua: dados.logradouro,
          cep: dados.cep,
          numero: formulario.value.endereco.numero,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
        }
      });
      */

      formulario.form.patchValue({
        endereco: {
          rua: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
        }
      });
    } else {
      this.resetaDadosFormulario (formulario);
      alert ('CEP não encontrado!');
    }
  }

  resetaDadosFormulario(formulario) {
    formulario.form.patchValue ({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null
      }
    });
  }

}
