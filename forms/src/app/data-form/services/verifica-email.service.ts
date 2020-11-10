import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  private url = 'assets/dados/verificar-email.json';

  constructor(private httpClient: HttpClient) { }

  public verificarEmail(email: string): Observable<any> {
    return this.httpClient.get (this.url).pipe (
      delay (2000),
      map ((dados: { emails: any[] }) => dados.emails),
      // tap (console.log),
      map ((dados: { email: string }[]) => dados.filter (valor => valor.email === email)),
      // tap (console.log),
      map ((dados: any[]) => dados.length > 0)
      // tap (console.log)
    );
  }
}
