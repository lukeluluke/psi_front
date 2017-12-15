import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../../shared';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../../shared/';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { ExpenseModalModule } from '../../shared/modules/expense-modal/expense-modal.module';
import { CreateExpenditureComponent } from './expenditure/create-expenditure/create-expenditure.component';
import { ViewExpenditureComponent } from './expenditure/view-expenditure/view-expenditure.component';
import { TransactionStatusPipe } from '../../shared/pipe/transaction-status.pipe';
import {ExpenditureFormComponent} from './expenditure/expenditure-form/expenditure-form.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { CostComponent } from './cost/cost.component';
import { IncomeComponent } from './income/income.component';
import { CreateIncomeComponent } from './income/create-income/create-income.component';
import { IncomeFormComponent } from './income/income-form/income-form.component';
import { ViewIncomeComponent } from './income/view-income/view-income.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountingRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule,
        InlineEditorModule,
        StatModule,
        ExpenseModalModule
    ],
    declarations: [
        AccountingComponent,
        ExpenditureFormComponent,
        CreateExpenditureComponent,
        ViewExpenditureComponent,
        TransactionStatusPipe,
        ExpenditureComponent,
        CostComponent,
        IncomeComponent,
        CreateIncomeComponent,
        IncomeFormComponent,
        ViewIncomeComponent
    ]
})

export class AccountingModule { }
