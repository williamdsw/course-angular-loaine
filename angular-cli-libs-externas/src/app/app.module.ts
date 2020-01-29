import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapExemploComponent } from './bootstrap-exemplo/bootstrap-exemplo.component';
import { MaterializeExemploComponent } from './materialize-exemplo/materialize-exemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapExemploComponent,
    MaterializeExemploComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
