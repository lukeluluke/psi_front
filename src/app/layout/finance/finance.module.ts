import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module'
import { FinanceComponent } from './finance.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FinanceRoutingModule,
        PageHeaderModule
    ],
    declarations: [FinanceComponent]
})

export class FinanceModule {}

