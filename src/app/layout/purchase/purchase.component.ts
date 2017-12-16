import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Orders, Companies, Warehouses, Divisions, Users} from '../../shared/mock';
import {Order} from '../../shared/model';
import {PaginationInstance} from 'ngx-pagination';
import {Router} from '@angular/router';

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

    filterCompanyUuid: string = '';
    filterUserUuid: string = '';
    filterWarehouseUuid: string = '';
    filterDivisionUuid: string = '';

    constructor(private router: Router) {
        this.orders = [];
        this.companies = this.convertSelectOptions(Companies);
        this.divisions = this.convertSelectOptions((Divisions));
        this.warehouses = this.convertSelectOptions(Warehouses);

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
        for (const o of Orders) {
            const order = new Order();
            this.orders.push(order.fromJson(o));
        }

        this.countAllOrder = this.orders.length;
        this.countPurchaseOrder = this.filterOrderByType(Order.TYPE_PURCHASE).length;
        this.countReturnOrder = this.filterOrderByType(Order.TYPE_PURCHASE_RETURN).length;
        Object.assign(this.filterOrders, this.orders);
        Object.assign(this.tempFilterOrders, this.orders);
    }

    ngOnInit() {
    }

    private filterOrderByType(type: number) {
        return this.orders.filter(o => o.type === type);
    }

    public filterUser(value) {
        this.filterUserUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    public filterWarehouse(value) {
        this.filterWarehouseUuid = (value.id !== -1) ? value.id : '';
        this.filterOrder();
    }

    public filterCompany(value) {
        this.filterCompanyUuid = (value.id !== -1) ? value.id : '';
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

        if (this.filterCompanyUuid !== '') {
            const companyOrders = allOrders.filter(o => o.company.uuid === this.filterCompanyUuid);
            allOrders = [];
            Object.assign(allOrders, companyOrders);
        }

        if (this.filterDivisionUuid !== '') {
            const divisionOrders = allOrders.filter(o => o.division.uuid === this.filterDivisionUuid);
            allOrders = [];
            Object.assign(allOrders, divisionOrders);
        }

        if (this.filterWarehouseUuid !== '') {
            const warehouseOrders = allOrders.filter(o => o.warehouse.uuid === this.filterWarehouseUuid);
            allOrders = [];
            Object.assign(allOrders, warehouseOrders);
        }

        this.filterOrders = [];
        Object.assign(this.filterOrders, allOrders);
    }

    public refreshValue(value) {
    }

    public removeCompany(value) {
        this.filterCompanyUuid = '';
    }

    public removeUser(value) {
        this.filterUserUuid = '';
    }

    public removeDivision(value) {
        this.filterDivisionUuid = '';
    }

    public removeWarehouse(value) {
        this.filterWarehouseUuid = '';
    }

    public viewOrder(orderUuid: string) {
        const order = this.orders.filter(o => o.uuid === orderUuid)[0];
        let viewUrl = '';
        if (order.type === Order.TYPE_PURCHASE) {
            viewUrl = '/purchase/view-purchase-order';
        } else {
            viewUrl = '/purchase/view-purchase-return-order';
        }
        this.router.navigate([viewUrl, {orderUuid: orderUuid, editable: false}]);
    }

    public editOrder(orderUuid: string) {
        const order = this.orders.filter(o => o.uuid === orderUuid)[0];
        let editUrl = '';
        if (order.type === Order.TYPE_PURCHASE) {
            editUrl = '/purchase/view-purchase-order';
        } else {
            editUrl = '/purchase/view-purchase-return-order';
        }
        this.router.navigate([editUrl, {orderUuid: orderUuid, editable: true}]);
    }

    public deleteOrder(orderUuid: string) {
        this.filterOrders = this.filterOrders.filter(o => o.uuid !== orderUuid);
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
