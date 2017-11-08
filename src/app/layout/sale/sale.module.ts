import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module'
import { SaleComponent } from './sale.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        SaleRoutingModule,
        PageHeaderModule
    ],
    declarations: [SaleComponent]
})

export class SaleModule {}

