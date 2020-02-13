import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Estado } from '../models/estado';
import { Cargo } from '../models/cargos';
import { Tecnologia } from '../models/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private cargos: Cargo[] = [
    { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Jr' },
    { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl' },
    { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Sr' },
  ];

  private tecnologias: Tecnologia[] = [
    { nome: 'java', descricao: 'Java' },
    { nome: 'javascript', descricao: 'JavaScript' },
    { nome: 'php', descricao: 'PHP' },
    { nome: 'ruby', descricao: 'Ruby' },
  ];

  private newsletter: any[] = [
    { valor: 'sim', descricao: 'Sim' },
    { valor: 'nao', descricao: 'Não' },
  ];

  constructor(private httpClient: HttpClient) { }

  getEstadosBr() {
    return this.httpClient.get<Estado[]> ('assets/dados/estadosbr.json').pipe ();
  }

  getCargos() : Cargo[] {
    return this.cargos;
  }

  getTecnologias(): Tecnologia[] {
    return this.tecnologias;
  }

  getNewsletter() {
    return this.newsletter;
  }
}
