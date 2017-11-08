import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        PurchaseRoutingModule,
        PageHeaderModule
    ],
    declarations: [PurchaseComponent]
})

export class PurchaseModule {}

