import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Estado } from '../models/estado';
import { Cargo } from '../models/cargos';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  cargos: Cargo[] = [
    { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
    { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
    { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Sr' },
  ];

  constructor(private httpClient: HttpClient) { }

  getEstadosBr() {
    return this.httpClient.get<Estado[]> ('assets/dados/estadosbr.json').pipe ();
  }

  getCargos() : Cargo[] {
    return this.cargos;
  }
}
