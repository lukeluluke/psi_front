import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {ProductionOrder} from '../../../shared/model/production-order';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductionOrders} from '../../../shared/mock/mock-production-order';

@Component({
    selector: 'app-view-production-order',
    templateUrl: './view-production-order.component.html',
    styleUrls: ['./view-production-order.component.scss'],
    animations: [routerTransition()]
})
export class ViewProductionOrderComponent implements OnInit {
    orderUuid: string;
    order: ProductionOrder;
    orders: ProductionOrder[];
    disabledInput: boolean = true;
    pageHeader: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.orders = [];
        this.order = new ProductionOrder();
        for (const o of ProductionOrders) {
            const order = new ProductionOrder();
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
        this.pageHeader = this.disabledInput ? '查看生产订单' : '修改生产订单';
    }

    onOrderSave(order: ProductionOrder) {
        if (order) {
            this.order = order;
            alert('生产订单修改成功');
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
