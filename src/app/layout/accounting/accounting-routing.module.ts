import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';

const routes: Routes = [
    { path: '', component: AccountingComponent },
    { path: 'expenditure', component: ExpenditureComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountingRoutingModule { }
