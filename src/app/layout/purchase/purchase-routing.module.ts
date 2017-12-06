import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PurchaseComponent} from './purchase.component';
import {CreatePurchaseOrderComponent} from './purchase-order/create-purchase-order/create-purchase-order.component';
import {ViewPurchaseOrderComponent} from './purchase-order/view-purchase-order/view-purchase-order.component';

const routes: Routes = [
    {path: '', component: PurchaseComponent},
    {path: 'place-purchase-order', component: CreatePurchaseOrderComponent},
    {path: 'view-purchase-order', component: ViewPurchaseOrderComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PurchaseRoutingModule {
}


