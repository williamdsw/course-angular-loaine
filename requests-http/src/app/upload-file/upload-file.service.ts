import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  upload(files: Set<File>, url: string) {

    // Passa arquivos para FormData
    const formData = new FormData ();
    files.forEach (file => {
      formData.append ('file', file, file.name);
    });

    return this.httpClient.post (url, formData, {
      // funciona apenas do UPLOAD / DOWNLOAD
      observe: 'events',
      reportProgress: true
    });
  }
}
