import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductionComponent} from './production.component';
import {CreateProductionOrderComponent} from './create-production-order/create-production-order.component';
import {ViewProductionOrderComponent} from './view-production-order/view-production-order.component';

const routes: Routes = [
    {path: '', component: ProductionComponent},
    {path: 'create-production-order', component: CreateProductionOrderComponent},
    {path: 'view-production-order', component: ViewProductionOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
