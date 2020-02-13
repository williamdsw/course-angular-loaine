import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  private url: string = 'assets/dados/verificar-email.json';

  constructor(private httpClient: HttpClient) { }

  verificarEmail(email: string) {
    return this.httpClient.get (this.url).pipe (
      delay (2000),
      map ((dados: { emails: any[] }) => dados.emails), 
      // tap (console.log), 
      map ((dados : { email: string }[]) => dados.filter (valor => valor.email === email)), 
      // tap (console.log), 
      map ((dados: any[]) => dados.length > 0), 
      // tap (console.log)
    );
  }
}
