import {Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Companies } from '../../../shared/mock/mock-company';
import { Products } from '../../../shared/mock/mock-product'
import { Warehouses} from '../../../shared/mock/mock-warehouse';
import { Divisions } from '../../../shared/mock/mock-division';
import { Users } from '../../../shared/mock/mock-user';
import { Order} from '../../../shared/model/order.model';
import { OrderProduct } from '../../../shared/model/order-product.model';
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
        itemsPerPage: 3,
        currentPage: 1
    };
    public orderProducts = [];
    public order: Order;
    public products = Products;
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
     * @param {OrderProduct} orderProduct
     */
    onProductAdd(orderProduct: OrderProduct) {
        this.orderProducts.push(orderProduct);
        this.order.orderProducts.push(orderProduct);
        console.log(this.order.orderProducts.length);
    }

    public saveEditable($event) {
        console.log(this.orderProducts);
        console.log($event);
    }
}
