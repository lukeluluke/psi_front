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

    order: Order;
    companies;
    users;
    divisions;
    warehouses;

    private value: string;
    constructor(
    ) {
        this.order = new Order();
        this.order.initialize();
        this.companies = this.convertSelectOptions(Companies);
        this.users = this.convertSelectOptions(Users);
        this.divisions = this.convertSelectOptions((Divisions));
        this.warehouses = this.convertSelectOptions(Warehouses);

        for ( const user of Users) {
            const option = {};
            option['id'] = user.uuid;
            option['text'] = user.lastName + ' ' + user.firstName ;
            this.users.push(option);
        }
    }

    ngOnInit() {
    }

    selectCompany(value: any): void {
       this.order.company = value;
    }

    selectUser(value: any): void {
       this.order.user = value;
    }

    selectDivision(value: any): void {
       this.order.division = value;
    }

    selectWarehouse(value: any): void {
       this.order.warehouse = value;
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

    public removeOrderProduct(uuid: string) {
        console.log(this.order.orderProducts.filter(p => p.uuid === uuid));
       this.order.orderProducts =  this.order.orderProducts.filter(p => p.uuid !== uuid);
    }

    public saveOrder() {
        console.log(JSON.stringify(this.order));
    }

    /**
     * Check if order is valid a order
     * todo: need to valid order form
     * @returns {boolean}
     */
    public isValidOrder() {
        return this.order.orderProducts.length === 0;
    }

    /**
     * Convert object of model to select options with key {id, text)
     * @param objects
     * @returns
     */
    private convertSelectOptions(objects) {
        const options = [];
        for ( const obj of objects) {
            const option = {};
            option['id'] = obj.uuid;
            option['text'] = obj.name;
            options.push(option);
        }
        return options;
    }


}
