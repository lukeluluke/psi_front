import {Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

import { Companies, Warehouses, Divisions, Users } from '../../../shared/mock';
import { Order, Product, OrderProduct } from '../../../shared/model/';
import { PaginationInstance } from 'ngx-pagination';

@Component({
    selector: 'app-place-orders',
    templateUrl: './place-orders.component.html',
    styleUrls: ['./place-orders.component.scss'],
    animations: [routerTransition()]
})
export class PlaceOrdersComponent implements OnInit {
   public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };
    public order: Order;
    companies = Companies;
    users = Users;
    divisions = Divisions;
    warehouses = Warehouses;

    private value: string;
    constructor(
    ) {
        this.order = new Order();
        this.order.initialize();
    }

    ngOnInit() {
    }
    selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {
        this.value = value;
    }

    /**
     * When user add a product in modal popup window
     * @param {Product} product
     */
    onProductAdd(product: Product) {
        const orderProduct = new OrderProduct().initialize();
        orderProduct.product = product;
        orderProduct.unitPrice = product.price;
        this.order.orderProducts.push(orderProduct);
    }

    public saveEditable($event) {
        console.log(this.order.orderProducts);
        console.log($event);
    }
}
