import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module'
import { SaleComponent } from './sale.component';
import { PageHeaderModule } from './../../shared';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';

@NgModule({
    imports: [
        CommonModule,
        SaleRoutingModule,
        PageHeaderModule
    ],
    declarations: [SaleComponent, PlaceOrdersComponent]
})

export class SaleModule {}

