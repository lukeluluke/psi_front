import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Router} from '@angular/router';
import {ProductionOrder} from '../../shared/model/production-order';
import {Order} from '../../shared/model';
import {Divisions, Users, Warehouses} from '../../shared/mock';
import {ProductionOrders} from '../../shared/mock/mock-production-order';
@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
    animations: [routerTransition()]
})
export class ProductionComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'production-order-list',
        itemsPerPage: 4,
        currentPage: 1
    };
    orders: ProductionOrder[];
    filterOrders: Order[];
    tempFilterOrders: Order[];
    users = [];
    divisions = [];
    shipWarehouses = [];
    receiveWarehouses = [];

    countPendingOrders: number;
    countFinishOrders: number;

    filterUserUuid: string = '';
    filterShipWarehouseUuid: string = '';
    filterReceiveWarehouseUuid: string = '';
    filterDivisionUuid: string = '';

    constructor(private router: Router) {
        this.orders = [];
        this.divisions = this.convertSelectOptions((Divisions));
        this.shipWarehouses = this.convertSelectOptions(Warehouses);
        this.receiveWarehouses = this.convertSelectOptions(Warehouses);
        for (const user of Users) {
            const option = {};
            option['id'] = user.uuid;
            option['text'] = user.lastName + ' ' + user.firstName;
            this.users.push(option);
        }
        const defaultUserOption = {
            id: -1,
            text: '显示所有'
        };
        this.users.push(defaultUserOption);

        this.filterOrders = [];
        this.tempFilterOrders = [];

        for (const o of ProductionOrders) {
            const order = new ProductionOrder();
            this.orders.push(order.fromJson(o));
        }

        Object.assign(this.filterOrders, this.orders);
        Object.assign(this.tempFilterOrders, this.orders);

        this.countPendingOrders = this.filterOrderByStatus(ProductionOrder.TYPE_PENDING).length;
        this.countFinishOrders = this.filterOrderByStatus(ProductionOrder.TYPE_FINISH).length;

    }

    ngOnInit() {
    }

    public filterUser(value) {
        this.filterUserUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    public filterShipWarehouse(value) {
        this.filterShipWarehouseUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    public filterReceiveWarehouse(value) {
        this.filterReceiveWarehouseUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    public filterDivision(value) {
        this.filterDivisionUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    private filterOrder() {
        let allOrders = [];
        Object.assign(allOrders, this.orders);
        if (this.filterUserUuid !== '') {
            const userOrders = allOrders.filter(o => o.user.uuid === this.filterUserUuid);
            allOrders = [];
            Object.assign(allOrders, userOrders);
        }

        if (this.filterDivisionUuid !== '') {
            const divisionOrders = allOrders.filter(o => o.division.uuid === this.filterDivisionUuid);
            allOrders = [];
            Object.assign(allOrders, divisionOrders);
        }

        if (this.filterShipWarehouseUuid !== '') {
            const shipWarehouseOrders = allOrders.filter(o => o.shipWarehouse.uuid === this.filterShipWarehouseUuid);
            allOrders = [];
            Object.assign(allOrders, shipWarehouseOrders);
        }

        if (this.filterReceiveWarehouseUuid !== '') {
            const receiveWarehouseOrders = allOrders.filter(o => o.receiveWarehouse.uuid === this.filterReceiveWarehouseUuid);
            allOrders = [];
            Object.assign(allOrders, receiveWarehouseOrders);
        }

        this.filterOrders = [];
        Object.assign(this.filterOrders, allOrders);
    }

    private filterOrderByStatus(status: number) {
        return this.orders.filter(o => o.status === status);
    }

    public refreshValue(value) {
    }

    public removeUser(value) {
        this.filterUserUuid = '';
    }

    public removeDivision(value) {
        this.filterDivisionUuid = '';
    }

    public removeShipWarehouse(value) {
        this.filterShipWarehouseUuid = '';
    }

    public removeReceiveWarehouse(value) {
        this.filterReceiveWarehouseUuid = '';
    }

    public viewOrder(orderUuid: string) {
        const viewUrl = '/production/view-production-order';
        this.router.navigate([viewUrl, {orderUuid: orderUuid, editable: false}]);
    }

    public editOrder(orderUuid: string) {
        const editUrl = '/production/view-production-order';
        this.router.navigate([editUrl, {orderUuid: orderUuid, editable: true}]);
    }

    public deleteOrder(orderUuid: string) {
        console.log(orderUuid);
    }

    /**
     * Convert object of model to select options with key {id, text)
     * @param objects
     * @returns
     */
    private convertSelectOptions(objects) {
        const options = [];
        for (const obj of objects) {
            const option = {};
            option['id'] = obj.uuid;
            option['text'] = obj.name;
            options.push(option);
        }

        const defaultOption = {
            id: -1,
            text: '显示所有'
        };
        options.push(defaultOption);
        return options;
    }

}
