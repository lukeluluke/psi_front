import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseRoutingModule } from './purchase-routing.module'
import { PurchaseComponent } from './purchase.component';
import { PageHeaderModule } from './../../shared';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../../shared/';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { ProductModalComponent } from './place-orders/product-modal/product-modal.component';
import {StatModule} from '../../shared/modules/stat/stat.module';

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
    ],
    declarations: [
        PurchaseComponent,
        PlaceOrdersComponent,
        ProductModalComponent,
    ]
})

export class PurchaseModule {}

