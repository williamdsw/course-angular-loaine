import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filterResponse, uploadProgress } from '../shared/rxjs-operators';

import { environment } from 'src/environments/environment';

import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent implements OnInit, OnDestroy {

  public files: Set<File>;
  public fileNames: string[] = [];
  public isUploading = false;
  public progress = 0;

  private subscription$: Subscription;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.subscription$ = new Subscription ();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe ();
  }

  public onChange(event): void {
    console.log (event);

    this.fileNames = [];
    this.isUploading = false;
    this.progress = 0;

    if (event !== null) {
      const selectedFiles = event.srcElement.files as FileList;
      const labelCustomFile = document.querySelector('#labelCustomFile');

      if (labelCustomFile) {
        this.files = new Set ();
        for (let index = 0; index < selectedFiles.length; index++) {
          this.fileNames.push (selectedFiles.item (index).name);
          this.files.add (selectedFiles.item (index));
        }
      }

      const filesLengthText = {
        empty: 'Selecionar Arquivo',
        single: 'Um arquivo apenas...',
        multiples: 'Múltiplos arquivos...'
      };

      labelCustomFile.innerHTML = (this.fileNames.length > 1 ? filesLengthText.multiples :
                                  (this.fileNames.length === 1 ? filesLengthText.single : filesLengthText.empty));
    }
  }

  public onUpload(): void {
    if (this.files && this.files.size >= 1) {
      const url = `${environment.BASE_URL}/upload`;
      console.log('url', url);
      this.isUploading = true;
      this.subscription$ = this.uploadService.upload (this.files, url)
        .pipe (
          uploadProgress ((pgr) => { this.progress = pgr; }),
          filterResponse()
      ).subscribe((response) => {
        console.log('response', response);
        alert('Upload Concluído');
        this.onChange(null);
      });
    }
  }

  public onDownloadExcel(): void {
    this.uploadService.download (environment.BASE_URL + '/downloadExcel').subscribe (
      (response: any) => {
        this.uploadService.handleFile (response, 'teste.xlsx');
      }
    );
  }

  public onDownloadPdf(): void {
    this.uploadService.download (environment.BASE_URL + '/downloadPDF').subscribe (
      (response: any) => {
        this.uploadService.handleFile (response, 'teste.pdf');
      }
    );
  }
}
