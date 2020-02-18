import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from './curso';

import { CrudService } from '../shared/crud-service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends CrudService<Curso> {

  constructor(protected httpClient: HttpClient) {
    super (httpClient, `${environment.API}/cursos`);
  }
  
}
