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

  download(url: string) {
    return this.httpClient.get (url, {
      responseType: 'blob' as 'json'
      //reportProgress: true // necessita de content-length no backend
    });
  }

  handleFile(response: any, fileName: string) {
    // Criando arquivo a partir do response 
    const file = new Blob ([ response ], {
      type: response.type
    });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob (file);
      return;
    }

    // Cria link a partir do arquivo
    const blob = window.URL.createObjectURL (file);

    const downloadLink = document.createElement ("a");
    downloadLink.href = blob;
    downloadLink.download = fileName;

    //downloadLink.click ();
    downloadLink.dispatchEvent (new MouseEvent ('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    // Exclui objeto
    setTimeout(() => { //firefox
      window.URL.revokeObjectURL (blob);
      downloadLink.remove ();
    }, 100);
  }
}
