import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingRoutingModule} from './setting-routing.module';
import {SettingComponent} from './setting.component';
import {ProductSettingComponent} from './product-setting/product-setting.component';
import {ProductSettingModalComponent} from './product-setting/product-setting-modal/product-setting-modal.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageHeaderModule, XpaginationModule} from '../../shared';
import {NgxPaginationModule} from 'ngx-pagination';
import {SelectModule} from 'ng2-select-compat';
import { ProductCategorySettingComponent } from './product-category-setting/product-category-setting.component';
import { ProductCategorySettingModalComponent } from './product-category-setting/product-category-setting-modal/product-category-setting-modal.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import {UserRolePipe} from '../../shared/pipe/user-role.pipe';
import { UserSettingModalComponent } from './user-setting/user-setting-modal/user-setting-modal.component';
import { WarehouseSettingComponent } from './warehouse-setting/warehouse-setting.component';
import { WarehouseSettingModalComponent } from './warehouse-setting/warehouse-setting-modal/warehouse-setting-modal.component';
import { DivisionSettingComponent } from './division-setting/division-setting.component';
import { DivisionSettingModalComponent } from './division-setting/division-setting-modal/division-setting-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        NgxPaginationModule,
        XpaginationModule,
        SelectModule,
        SettingRoutingModule
    ],
    declarations: [
        UserRolePipe,
        SettingComponent,
        ProductSettingComponent,
        ProductSettingModalComponent,
        ProductCategorySettingComponent,
        ProductCategorySettingModalComponent,
        UserSettingComponent,
        UserSettingModalComponent,
        WarehouseSettingComponent,
        WarehouseSettingModalComponent,
        DivisionSettingComponent,
        DivisionSettingModalComponent
    ],
    entryComponents: [
        ProductSettingModalComponent,
        ProductCategorySettingModalComponent,
        UserSettingModalComponent,
        WarehouseSettingModalComponent,
        DivisionSettingModalComponent
    ]
})
export class SettingModule {
}
