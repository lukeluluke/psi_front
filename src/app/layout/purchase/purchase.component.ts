import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import { Orders } from '../../shared/mock';
import { Order, OrderStatus } from '../../shared/model';

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
    animations: [routerTransition()]
})
export class PurchaseComponent implements OnInit {
    countAllOrder: number;
    countPendingOrder: number;
    countFinishOrder: number;
    orders: Order[];
    filterOrders: Order[];
    constructor() {
        this.orders = [];
        this.filterOrders = [];
        for (const o of Orders) {
            const order = new Order();
            this.orders.push(order.fromJson(o));
        }

        this.countAllOrder = this.orders.length;
        this.countPendingOrder = this.filterOrderByStatus(OrderStatus.pending).length;
        this.countFinishOrder = this.filterOrderByStatus(OrderStatus.finish).length;

    }

    ngOnInit() {
    }

    private filterOrderByStatus(status: number) {
        return this.orders.filter(o => o.status === status);
    }

}
