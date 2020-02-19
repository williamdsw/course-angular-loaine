import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadFileComponent } from './upload-file.component';

const ROUTES: Routes = [
  { path: '', component: UploadFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
