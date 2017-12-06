import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingComponent } from './accounting.component';
import { AccountsPayableComponent } from './accounts-payable/accounts-payable.component';

import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountingRoutingModule } from './accounting-routing.module'
import { PageHeaderModule } from './../../shared';
import { SelectModule } from 'ng2-select-compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { XpaginationModule } from '../../shared/';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { StatModule } from '../../shared/modules/stat/stat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountingRoutingModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    SelectModule,
    NgxPaginationModule,
    XpaginationModule,
    InlineEditorModule,
    StatModule
  ],
  declarations: [AccountingComponent, AccountsPayableComponent]
})
export class AccountingModule { }
