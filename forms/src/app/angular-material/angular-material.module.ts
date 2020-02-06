import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class AngularMaterialModule { }
