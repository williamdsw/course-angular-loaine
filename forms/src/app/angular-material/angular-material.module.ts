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
  MatButtonModule,
  MatTabsModule
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
  MatButtonModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class AngularMaterialModule { }
