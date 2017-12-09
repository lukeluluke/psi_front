import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';
import {ProductSettingComponent} from './product-setting/product-setting.component';
import {ProductCategorySettingComponent} from './product-category-setting/product-category-setting.component';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {WarehouseSettingComponent} from './warehouse-setting/warehouse-setting.component';

const routes: Routes = [
    { path: '', component: SettingComponent },
    { path: 'product-setting', component: ProductSettingComponent },
    { path: 'product-category-setting', component: ProductCategorySettingComponent },
    { path: 'user-setting', component: UserSettingComponent},
    { path: 'warehouse-setting', component: WarehouseSettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
