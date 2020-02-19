import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { UploadFileService } from './upload-file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  public files: Set<File>;
  public fileNames: string[] = [];
  public uploading: boolean = false;
  public progress: number = 0;

  private subscription$: Subscription;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.subscription$ = new Subscription ();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe ();
  }

  onChange(event) {
    console.log (event);

    this.fileNames = [];
    this.uploading = false;
    this.progress = 0;

    const selectedFiles = <FileList>event.srcElement.files;
    const labelCustomFile = document.getElementById ('labelCustomFile');
    
    this.files = new Set ();
    for (let index = 0; index < selectedFiles.length; index++) {
      this.fileNames.push (selectedFiles.item (index).name);
      this.files.add (selectedFiles.item (index));
    }

    labelCustomFile.innerHTML = (this.fileNames.length > 1 ? 'Múltiplos arquivos...' : (this.fileNames.length == 1 ? 'Um arquivo apenas...' : 'Selecionar Arquivo'));
  }

  onUpload() {

    if (this.files && this.files.size >= 1) {
      this.uploading = true;
      this.subscription$ = this.uploadService.upload (this.files, environment.BASE_URL + '/upload')
      .subscribe ((event: HttpEvent<Object>) => {
          console.log (event);

          if (event.type === HttpEventType.Response) {
            console.log ('Upload concluído');
          }
          else if (event.type === HttpEventType.UploadProgress) {
            const percent = Math.round ((event.loaded * 100) / event.total);
            console.log ('Progresso:', percent);
            this.progress = percent;
          }

        }
      );
    }
  }

}
