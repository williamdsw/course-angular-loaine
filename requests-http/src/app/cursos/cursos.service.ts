import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, delay } from 'rxjs/operators'

import { environment } from '../../environments/environment';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // FIELDS

  private readonly API = `${environment.API}/cursos`;

  // CONSTRUCTOR

  constructor(private httpClient: HttpClient) { }

  // HELPER FUNCTIONS

  list() {
    return this.httpClient.get<Curso[]> (this.API).pipe (
      delay (2000),
      tap (console.log)
    );
  }
}