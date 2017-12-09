import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/model';
import {Orders} from '../../../../shared/mock';
import {ActivatedRoute, Router} from '@angular/router';
import {routerTransition} from '../../../../router.animations';

@Component({
    selector: 'app-view-purchase-order',
    templateUrl: './view-purchase-order.component.html',
    styleUrls: ['./view-purchase-order.component.scss'],
    animations: [routerTransition()]
})
export class ViewPurchaseOrderComponent implements OnInit {
    orderUuid: string;
    order: Order;
    orders: Order[];
    disabledInput: boolean = true;
    pageHeader: string;
    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.orders = [];
        this.order = new Order();
        for (const o of Orders) {
            const order = new Order();
            this.orders.push(order.fromJson(o));
        }

        this.orderUuid = this.route.snapshot.paramMap.get('orderUuid');
        this.disabledInput = (this.route.snapshot.paramMap.get('editable') === 'false');
        const selectOrder = this.orders.filter(o => o.uuid === this.orderUuid);
        if (selectOrder) {
            Object.assign(this.order, selectOrder[0]);
        } else {
            this.router.navigate(['/not-found']);
        }
    }

    ngOnInit() {
        this.pageHeader = this.disabledInput ? '查看订单' : '修改订单';
    }

    onOrderSave(order: Order) {
        if (order) {
            this.order = order;
            alert('Order updated, good job');
        }
    }

    onViewStatsChange(status: string) {
        if (status === 'view') {
            this.pageHeader = '查看订单';
        } else {
            this.pageHeader = '修改订单';
        }
    }

}
