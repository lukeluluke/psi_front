import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import {XpaginationComponent} from './xpagination.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule
    ],
    declarations: [XpaginationComponent],
    exports: [XpaginationComponent]
})
export class XpaginationModule {}
