import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { SharedModule } from './../shared/shared.module';

import { DataFormComponent } from './data-form.component';

@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class DataFormModule { }
