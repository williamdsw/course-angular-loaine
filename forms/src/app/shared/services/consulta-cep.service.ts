import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root' // nao precisa mais declarar nos 'providers[]'
})
export class ConsultaCepService {

  constructor(private httpClient: HttpClient) { }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const VALIDA_CEP = /^[0-9]{8}$/;
      if (VALIDA_CEP.test (cep)) {

        return this.httpClient.get (`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of ({});
  }
}
