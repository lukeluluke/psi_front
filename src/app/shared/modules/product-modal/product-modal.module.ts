import {NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../xpagination/xpagination.module';
import { ProductModalComponent } from './product-modal.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule
    ],
    declarations: [ProductModalComponent],
    exports: [ProductModalComponent]
})

export class ProductModalModule {}
