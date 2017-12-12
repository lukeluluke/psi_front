import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
    selector: 'app-create-production-order',
    templateUrl: './create-production-order.component.html',
    styleUrls: ['./create-production-order.component.scss'],
    animations: [routerTransition()]
})
export class CreateProductionOrderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
