import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../xpagination/xpagination.module';
import { AccountingTransactionItemModalComponent } from './accounting-transaction-item-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule
    ],
    declarations: [AccountingTransactionItemModalComponent]
})
export class AccountingTransactionModalModule { }
