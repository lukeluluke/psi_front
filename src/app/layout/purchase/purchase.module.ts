import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component';
import { PageHeaderModule } from './../../shared';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { SelectModule } from 'ng2-select-compat';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PurchaseRoutingModule,
        PageHeaderModule,
        SelectModule
    ],
    declarations: [PurchaseComponent, PlaceOrdersComponent]
})

export class PurchaseModule {}

