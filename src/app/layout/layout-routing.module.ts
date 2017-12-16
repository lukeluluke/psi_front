import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'purchase', loadChildren: './purchase/purchase.module#PurchaseModule'},
            { path: 'sale', loadChildren: './sale/sale.module#SaleModule'},
            { path: 'accounting', loadChildren: './accounting/accounting.module#AccountingModule'},
            { path: 'setting', loadChildren: './setting/setting.module#SettingModule'},
            { path: 'production', loadChildren: './production/production.module#ProductionModule'},
            { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
