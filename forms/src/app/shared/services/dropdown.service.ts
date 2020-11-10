import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Estado } from '../models/estado';
import { Cidade } from '../models/cidade';
import { Cargo } from '../models/cargos';
import { Tecnologia } from '../models/tecnologia';

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

  public getEstadosBr(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]> ('assets/dados/estadosbr.json').pipe ();
  }

  public getCidades(estadoId: number): Observable<Cidade[]> {
    return this.httpClient.get<Cidade[]> ('assets/dados/cidades.json').pipe (
      map ((cidades: Cidade[]) => cidades.filter (cidade => Number(cidade.estado) === estadoId)));
  }

  public getCargos(): Cargo[] {
    return this.cargos;
  }

  public getTecnologias(): Tecnologia[] {
    return this.tecnologias;
  }

  public getNewsletter() {
    return this.newsletter;
  }
}
