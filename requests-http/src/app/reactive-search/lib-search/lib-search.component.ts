import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSearch() {
    let fields: string[] = [
      'name', 'description', 'version'
    ];
    let value = this.queryField.value;
    if (value && (value = value.trim ()) !== '') {

      // Monta parametros da URL
      let params = new HttpParams ();
      params = params.set ('search', value);
      params = params.set ('fields', fields.join (','));

      this.results$ = this.httpClient.get (this.SEARCH_URL, { params })
        .pipe (
        tap ((response: any) => this.total = response.total),
        map ((response: any) => response.results)
      );
    }
  }

}
