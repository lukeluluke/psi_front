import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductionRoutingModule} from './production-routing.module';
import {ProductionComponent} from './production.component';
import {CreateProductionOrderComponent} from './create-production-order/create-production-order.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageHeaderModule, StatModule, XpaginationModule} from '../../shared/modules';
import {SelectModule} from 'ng2-select-compat';
import {NgxPaginationModule} from 'ngx-pagination';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { ProductionOrderFormComponent } from './production-order-form/production-order-form.component';
import { CreateProduceProductFormComponent } from './create-produce-product-form/create-produce-product-form.component';
import {ProductModalModule} from '../../shared/modules/product-modal/product-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule,
        InlineEditorModule,
        StatModule,
        ProductionRoutingModule,
        ProductModalModule
    ],
    declarations: [
        ProductionComponent,
        CreateProductionOrderComponent,
        ProductionOrderFormComponent,
        CreateProduceProductFormComponent
    ]
})
export class ProductionModule {
}
