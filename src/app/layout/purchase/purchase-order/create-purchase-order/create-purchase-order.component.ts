import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import { Order } from '../../../../shared/model/';
@Component({
    selector: 'app-create-purchase-order',
    templateUrl: './create-purchase-order.component.html',
    styleUrls: ['./create-purchase-order.component.scss'],
    animations: [routerTransition()]
})
export class CreatePurchaseOrderComponent implements OnInit {
    order: Order;
    constructor() {
        this.order = new Order();
        this.order.initialize();
    }

    ngOnInit() {
    }


    /**
     * When user create a Order
     * @param {Order} order
     */
    onOrderCreate(order: Order) {
        if (order) {
            this.order = order;
            alert('Order created, good job');
        }
    }
}
