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
    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.orders = [];
        this.order = new Order();
        for (const o of Orders) {
            const order = new Order();
            this.orders.push(order.fromJson(o));
        }

        this.orderUuid = this.route.snapshot.paramMap.get('orderUuid');

        const selectOrder = this.orders.filter(o => o.uuid === this.orderUuid);
        if (selectOrder) {
            Object.assign(this.order, selectOrder[0]);
        } else {
            this.router.navigate(['/not-found']);
        }
    }

    ngOnInit() {
    }

    // onOrderView(order: Order) {
    //     console.log(order);
    // }

}
