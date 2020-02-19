import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibSearchComponent } from './lib-search/lib-search.component';

const ROUTES: Routes = [
  { path : '', component: LibSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ReactiveSearchRoutingModule { }
