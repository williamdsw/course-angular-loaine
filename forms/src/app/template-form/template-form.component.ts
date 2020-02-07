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

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const VALIDA_CEP = /^[0-9]{8}$/;
      if (VALIDA_CEP.test(cep)) {
        this.inscricao = this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
      }
    }
  }

}
