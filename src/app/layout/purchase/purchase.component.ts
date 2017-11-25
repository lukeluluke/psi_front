import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import { Orders } from '../../shared/mock';
import { Order } from '../../shared/model';
import { PaginationInstance } from 'ngx-pagination';
@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
    animations: [routerTransition()]
})
export class PurchaseComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 4,
        currentPage: 1
    };
    countAllOrder: number;
    countPendingOrder: number;
    countFinishOrder: number;
    countReturnOrder: number;
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
        this.countPendingOrder = this.filterOrderByStatus(Order.PENDING).length;
        this.countFinishOrder = this.filterOrderByStatus(Order.FINISH).length;
        this.countReturnOrder = this.filterOrderByStatus(Order.RETURN).length;
        Object.assign(this.filterOrders, this.orders);
    }

    ngOnInit() {
    }

    private filterOrderByStatus(status: number) {
        return this.orders.filter(o => o.status === status);
    }

}
