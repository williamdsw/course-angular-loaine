import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  tap, 
  map, 
  filter, 
  distinctUntilChanged, 
  debounceTime, 
  switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl ();
  readonly SEARCH_URL: string = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number = 0;
  readonly FIELDS: string[] = [ 'name', 'description', 'version', 'homepage' ];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
     this.results$ = this.queryField.valueChanges.pipe (
      map (value => value.trim ()),         // limpa espacos
      filter (value => value.length > 1),   // filtra quando tamanho for maior q 1
      debounceTime (200),                   // espera 200 ms
      distinctUntilChanged (),              // So continua se valor for diferente
      switchMap (value => this.httpClient.get (this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.FIELDS.join (',')
        }
      })), // cancela requisicao anterior e gera uma nova
      tap ((response: any) => this.total = response.total),
      map ((response: any) => response.results )
    );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim ()) !== '') {

      // Monta parametros da URL
      let params = new HttpParams ();
      params = params.set ('search', value);
      params = params.set ('fields', this.FIELDS.join (','));

      this.results$ = this.httpClient.get (this.SEARCH_URL, { params })
        .pipe (
        tap ((response: any) => this.total = response.total),
        map ((response: any) => response.results)
      );
    }
  }

}
