import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  public files: Set<File>;

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

    const selectedFiles = <FileList>event.srcElement.files;
    const labelCustomFile = document.getElementById ('labelCustomFile');
    
    const fileNames = [];
    this.files = new Set ();
    for (let index = 0; index < selectedFiles.length; index++) {
      fileNames.push (selectedFiles.item (index).name);
      this.files.add (selectedFiles.item (index));
    }

    labelCustomFile.innerHTML = fileNames.join (", ");
  }

  onUpload() {

    if (this.files && this.files.size >= 1) {
      this.subscription$ = this.uploadService.upload (this.files, 'http://localhost:8000/upload').subscribe (
        response => console.log ('Upload concluído')
      );
    }
  }

}
