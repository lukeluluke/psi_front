import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase.component';
import {PlaceOrdersComponent} from './place-orders/place-orders.component';

const routes: Routes = [
    { path: '', component: PurchaseComponent},
    { path: 'place-orders', component: PlaceOrdersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PurchaseRoutingModule {}


