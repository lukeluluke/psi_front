import {NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../xpagination/xpagination.module';
import { ExpenseModalComponent } from './expense-modal.component';

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        RouterModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule
    ],
    declarations: [ExpenseModalComponent],
    exports: [ExpenseModalComponent]
})
export class ExpenseModalModule { }

