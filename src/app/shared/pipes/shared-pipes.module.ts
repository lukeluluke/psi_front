import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderStatusPipe} from './order-status.pipe';
import {OrderTypePipe} from './order-type.pipe';
import {UserRolePipe} from './user-role.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OrderStatusPipe,
        OrderTypePipe,
        UserRolePipe
    ],
    exports: [
        OrderStatusPipe,
        OrderTypePipe,
        UserRolePipe
    ]
})
export class SharedPipesModule { }
