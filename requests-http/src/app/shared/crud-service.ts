import { HttpClient } from '@angular/common/http'
import { delay, tap, take } from 'rxjs/operators'

export class CrudService<T> {

  // CONSTRUCTOR

  constructor(
      protected httpClient: HttpClient,
      private API_URL) { }

  // HELPER FUNCTIONS

  list() {
    return this.httpClient.get<T[]> (this.API_URL).pipe (
      delay (2000),
      tap (console.log)
    );
  }

  loadById (id: number) {
    return this.httpClient.get<T> (`${this.API_URL}/${id}`).pipe (take (1));
  }

  private create(record: T) {
    return this.httpClient.post (this.API_URL, record).pipe (take (1));
  }

  private update(record: T) {
    return this.httpClient.put (`${this.API_URL}/${record['id']}`, record).pipe (take (1));
  }

  save(record: T) {
    return (record['id'] ? this.update (record) : this.create (record));
  }

  remove(record: T) {
    return this.httpClient.delete (`${this.API_URL}/${record['id']}`).pipe (take (1));
  }
}
