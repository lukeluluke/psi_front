import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import {Order} from '../../../../shared/model';
import {ActivatedRoute, Router} from '@angular/router';
import {Orders} from '../../../../shared/mock';

@Component({
    selector: 'app-view-purchase-return-order',
    templateUrl: './view-purchase-return-order.component.html',
    styleUrls: ['./view-purchase-return-order.component.scss'],
    animations: [routerTransition()]
})
export class ViewPurchaseReturnOrderComponent implements OnInit {
    orderUuid: string;
    order: Order;
    orders: Order[];
    disabledInput: boolean = true;
    pageHeader: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
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
        this.pageHeader = this.disabledInput ? '查看退货订单' : '修改退货订单';
    }

    onOrderSave(order: Order) {
        if (order) {
            this.order = order;
            alert('Order updated, good job');
        }
    }

    onViewStatsChange(status: string) {
        if (status === 'view') {
            this.pageHeader = '查看退货订单';
        } else {
            this.pageHeader = '修改退货订单';
        }
    }

}
