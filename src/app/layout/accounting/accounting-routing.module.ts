import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { CreateExpenditureComponent } from './expenditure/create-expenditure/create-expenditure.component';
import { ViewExpenditureComponent } from './expenditure/view-expenditure/view-expenditure.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { CostComponent } from './cost/cost.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BankTransactionComponent } from './bank-account/bank-transaction/bank-transaction.component';

const routes: Routes = [
    { path: '', component: AccountingComponent },
    { path: 'expenditure', component: ExpenditureComponent },
    { path: 'expenditure/create-expenditure', component: CreateExpenditureComponent },
    { path: 'expenditure/view-expenditure', component: ViewExpenditureComponent },
    { path: 'cost', component: CostComponent },
    { path: 'bank-account', component: BankAccountComponent },
    { path: 'bank-account/bank-transaction', component: BankTransactionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountingRoutingModule { }
