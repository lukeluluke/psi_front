import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PurchaseComponent} from './purchase.component';
import {CreatePurchaseOrderComponent} from './purchase-order/create-purchase-order/create-purchase-order.component';
import {ViewPurchaseOrderComponent} from './purchase-order/view-purchase-order/view-purchase-order.component';
import {CreatePurchaseReturnOrderComponent} from './purchase-return-order/create-purchase-return-order/create-purchase-return-order.component';
import {ViewPurchaseReturnOrderComponent} from './purchase-return-order/view-purchase-return-order/view-purchase-return-order.component';

const routes: Routes = [
    {path: '', component: PurchaseComponent},
    {path: 'create-purchase-order', component: CreatePurchaseOrderComponent},
    {path: 'view-purchase-order', component: ViewPurchaseOrderComponent},
    {path: 'create-purchase-return-order', component: CreatePurchaseReturnOrderComponent},
    {path: 'view-purchase-return-order', component: ViewPurchaseReturnOrderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PurchaseRoutingModule {
}


