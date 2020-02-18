import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AlertModalComponent
  ],
  // Componente sera instanciado e usado em tempo de execucao
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
