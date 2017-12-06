import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companies, Warehouses, Divisions, Users } from '../../../../shared/mock';
import { Order, Product, OrderProduct } from '../../../../shared/model/';

import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.scss']
})
export class PurchaseOrderFormComponent implements OnInit {
    @Input() order: Order;
    @Input() disabled: boolean = true;
    @Output() orderUpdate = new EventEmitter<Order>();
    public pageConfig: PaginationInstance = {
        id: 'purchase-order',
        itemsPerPage: 10,
        currentPage: 1
    };
    companies;
    users = [];
    divisions;
    warehouses;

    selectedCompany = [];
    selectedUser = [];
    selectedWarehouse = [];
    selectedDivision = [];


    private value: string;
    constructor(
    ) {

        this.companies = this.convertSelectOptions(Companies);
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
        /**
         * Need to setup default options fro drop down
         */
        if (this.order.company) {
            const selectCompany = this.companies.filter(c => c.id === this.order.company.uuid);
            if (selectCompany) {
                this.selectedCompany.push(this.order.company.name);
            }
        }

        if (this.order.user) {
             const selectUser = this.users.filter(c => c.id === this.order.user.uuid);
             if (selectUser.length > 0 ) {
                 this.selectedUser.push(this.order.user.getFullName());
             }
        }

        if (this.order.division) {
             const selectDivision = this.divisions.filter(c => c.id === this.order.division.uuid);
            if (selectDivision) {
                this.selectedDivision.push(this.order.division.name);
            }
        }

        if (this.order.warehouse) {
            const selectWarehouse = this.warehouses.filter(c => c.id === this.order.warehouse.uuid);
            if (selectWarehouse) {
                this.selectedWarehouse.push(this.order.warehouse.name);
            }
        }

        console.log(this.selectedDivision);
        console.log(this.selectedCompany);
        console.log(this.selectedUser);
        console.log(this.selectedWarehouse);
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
        this.order.orderProducts =  this.order.orderProducts.filter(p => p.uuid !== uuid);
    }


    public confirmOrder(order: Order) {
        if (order) {
            this.orderUpdate.emit(order);
        }
    }

    public editOrder(orderUuid: string) {
       this.disabled = false;
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
