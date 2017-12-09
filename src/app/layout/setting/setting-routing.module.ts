import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';
import {ProductSettingComponent} from './product-setting/product-setting.component';

const routes: Routes = [
    { path: '', component: SettingComponent },
    { path: 'product-setting', component: ProductSettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
