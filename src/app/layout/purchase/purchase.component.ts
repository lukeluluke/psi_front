import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import { Orders, Companies, Warehouses, Divisions, Users  } from '../../shared/mock';
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
    countPurchaseOrder: number;
    countReturnOrder: number;
    orders: Order[];
    filterOrders: Order[];
    tempFilterOrders: Order[];
    companies = [];
    users = [];
    divisions = [];
    warehouses = [];
    constructor() {
        this.orders = [];
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

        this.filterOrders = [];
        this.tempFilterOrders = [];
        for (const o of Orders) {
            const order = new Order();
            this.orders.push(order.fromJson(o));
        }

        this.countAllOrder = this.orders.length;
        this.countPurchaseOrder = this.filterOrderByType(Order.TYPE_PURCHASE).length;
        this.countReturnOrder = this.filterOrderByType(Order.TYPE_PURCHASE_RETURN).length;
        Object.assign(this.filterOrders, this.orders);
        console.log(this.orders);
        Object.assign(this.tempFilterOrders, this.orders);
    }

    ngOnInit() {
    }

    private filterOrderByType(type: number) {
        return this.orders.filter(o => o.type === type);
    }

    private filterOrderByStatus(status: number) {
        return this.orders.filter(o => o.status === status);
    }

    public filterUser( value ) {

    }

    public filterWarehouse(value) {

    }

    public filterCompany(value) {

    }

    public filterDivision(value) {

    }

    public refreshValue(value) {
        console.log(value);
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
