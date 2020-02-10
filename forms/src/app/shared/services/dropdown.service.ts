import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstadosBr() {
    return this.httpClient.get<Estado[]> ('assets/dados/estadosbr.json').pipe ();
  }
}
