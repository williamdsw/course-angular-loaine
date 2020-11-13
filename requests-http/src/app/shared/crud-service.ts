import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';

export class CrudService<T> {

  // CONSTRUCTOR

  constructor(protected httpClient: HttpClient, private urlApi) { }

  // HELPER FUNCTIONS

  public list(): Observable<T[]> | T[] {
    return this.httpClient.get<T[]> (this.urlApi).pipe (
      delay (2000),
      tap (console.log)
    );
  }

  public loadById(id: number): Observable<T> | T {
    return this.httpClient.get<T> (`${this.urlApi}/${id}`).pipe (take (1));
  }

  private create(record: T): Observable<any> {
    return this.httpClient.post (this.urlApi, record).pipe (take (1));
  }

  private update(record: T): Observable<any> {
    const url = `${this.urlApi}/${record['id']}`;
    return this.httpClient.put (url, record).pipe (take (1));
  }

  public save(record: T): Observable<any> {
    return (record['id'] ? this.update (record) : this.create (record));
  }

  public remove(record: T): Observable<any> {
    const url = `${this.urlApi}/${record['id']}`;
    return this.httpClient.delete (url).pipe (take (1));
  }
}
