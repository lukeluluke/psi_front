import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module'
import { SaleComponent } from './sale.component';
import { PageHeaderModule } from './../../shared';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';

import { FormsModule } from '@angular/forms';
import { SelectModule} from 'ng2-select-compat';

@NgModule({
    imports: [
        CommonModule,
        SaleRoutingModule,
        PageHeaderModule,
        FormsModule,
        SelectModule
    ],
    declarations: [SaleComponent, PlaceOrdersComponent]
})

export class SaleModule {}
