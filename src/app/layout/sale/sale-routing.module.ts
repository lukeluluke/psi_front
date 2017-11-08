import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale.component';
import {PlaceOrdersComponent} from './place-orders/place-orders.component';

const routes: Routes = [
    {path: '', component: SaleComponent},
    {path: 'place-orders', component: PlaceOrdersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SaleRoutingModule {}


