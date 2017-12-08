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
        SettingComponent,
        ProductSettingComponent,
        ProductSettingModalComponent
    ],
    entryComponents: [
        ProductSettingModalComponent,
    ]
})
export class SettingModule {
}
