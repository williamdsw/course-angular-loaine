import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownService } from './services/dropdown.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMessageComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMessageComponent,
    InputFieldComponent,
  ],
  providers: [DropdownService]
})
export class SharedModule { }
