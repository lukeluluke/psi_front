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
        ProductionRoutingModule
    ],
    declarations: [
        ProductionComponent,
        CreateProductionOrderComponent
    ]
})
export class ProductionModule {
}
