import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule { }
