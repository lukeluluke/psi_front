import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component';
import { PageHeaderModule } from './../../shared';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';

@NgModule({
    imports: [
        CommonModule,
        PurchaseRoutingModule,
        PageHeaderModule
    ],
    declarations: [PurchaseComponent, PlaceOrdersComponent]
})

export class PurchaseModule {}

