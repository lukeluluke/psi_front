import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';
import {ProductSettingComponent} from './product-setting/product-setting.component';
import {ProductCategorySettingComponent} from './product-category-setting/product-category-setting.component';

const routes: Routes = [
    { path: '', component: SettingComponent },
    { path: 'product-setting', component: ProductSettingComponent },
    { path: 'product-category-setting', component: ProductCategorySettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
