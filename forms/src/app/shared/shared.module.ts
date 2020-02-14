import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DropdownService } from './services/dropdown.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    FormDebugComponent, 
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMessageComponent
  ],
  providers: [DropdownService]
})
export class SharedModule { }
