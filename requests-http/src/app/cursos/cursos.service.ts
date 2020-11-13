import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Curso } from './curso';

import { CrudService } from '../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends CrudService<Curso> {

  constructor(protected httpClient: HttpClient) {
    super (httpClient, `${environment.API}/cursos`);
  }

}
