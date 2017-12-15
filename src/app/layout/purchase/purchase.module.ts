import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component';
import {PageHeaderModule, SharedPipesModule} from './../../shared';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../../shared/';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { ProductModalModule } from '../../shared/modules/product-modal/product-modal.module';
import { OrderTypePipe } from '../../shared/pipes/order-type.pipe';
import { CreatePurchaseOrderComponent } from './purchase-order/create-purchase-order/create-purchase-order.component';
import { PurchaseOrderFormComponent } from './purchase-order/purchase-order-form/purchase-order-form.component';
import { ViewPurchaseOrderComponent } from './purchase-order/view-purchase-order/view-purchase-order.component';
import { PurchaseReturnOrderFormComponent } from './purchase-return-order/purchase-return-order-form/purchase-return-order-form.component';
import { CreatePurchaseReturnOrderComponent } from './purchase-return-order/create-purchase-return-order/create-purchase-return-order.component';
import { ViewPurchaseReturnOrderComponent } from './purchase-return-order/view-purchase-return-order/view-purchase-return-order.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PurchaseRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule,
        InlineEditorModule,
        StatModule,
        ProductModalModule,
        SharedPipesModule
    ],
    declarations: [
        PurchaseComponent,
        CreatePurchaseOrderComponent,
        PurchaseOrderFormComponent,
        ViewPurchaseOrderComponent,
        PurchaseReturnOrderFormComponent,
        CreatePurchaseReturnOrderComponent,
        ViewPurchaseReturnOrderComponent
    ]
})

export class PurchaseModule {}

