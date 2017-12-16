import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InventoryRoutingModule} from './inventory-routing.module';
import {InventoryComponent} from './inventory.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageHeaderModule, StatModule, XpaginationModule} from '../../shared/modules';
import {NgxPaginationModule} from 'ngx-pagination';
import {SelectModule} from 'ng2-select-compat';
import {SharedPipesModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        SelectModule,
        NgxPaginationModule,
        XpaginationModule,
        StatModule,
        SharedPipesModule,
        InventoryRoutingModule
    ],
    declarations: [InventoryComponent]
})
export class InventoryModule {
}
