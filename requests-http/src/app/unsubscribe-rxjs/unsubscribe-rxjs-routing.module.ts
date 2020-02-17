import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';

const ROUTES: Routes = [
    { path: '', component: UnsubscribePocComponent }
];

@NgModule({
    imports: [RouterModule.forChild (ROUTES)],
    exports: [RouterModule]
})
export class UnsubscribeRxjsRoutingModule {}