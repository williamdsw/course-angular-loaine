import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnviarValorService {

    private emissor$ = new Subject<string> ();

    public emitirValor(valor: string): void {
        this.emissor$.next (valor);
    }

    public getValor(): Observable<string> {
        return this.emissor$.asObservable ();
    }
}