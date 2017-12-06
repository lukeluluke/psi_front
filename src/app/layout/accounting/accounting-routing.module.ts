import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import {AccountsPayableComponent} from './accounts-payable/accounts-payable.component';

const routes: Routes = [
    { path: '', component: AccountingComponent},
    { path: 'accounts-payable', component: AccountsPayableComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountingRoutingModule {}


