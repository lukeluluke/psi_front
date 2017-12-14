import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductionOrder} from '../../../shared/model/production-order';
import {PaginationInstance} from 'ngx-pagination';
import {Companies, Divisions, Users, Warehouses} from '../../../shared/mock';

@Component({
    selector: 'app-production-order-form',
    templateUrl: './production-order-form.component.html',
    styleUrls: ['./production-order-form.component.scss']
})
export class ProductionOrderFormComponent implements OnInit {
    @Input() order: ProductionOrder;
    @Input() disabled: boolean = true;
    @Output() orderUpdate = new EventEmitter<ProductionOrder>();
    @Output() viewStatus? = new EventEmitter<string>();
    public pageConfig: PaginationInstance = {
        id: 'purchase-order',
        itemsPerPage: 10,
        currentPage: 1
    };
    users = [];
    divisions;
    receiveWarehouses;
    shipWarehouses;

    selectedUser = [];
    selectedShipWarehouse = [];
    selectedReceiveWarehouse = [];
    selectedDivision = [];

    constructor() {
        this.divisions = this.convertSelectOptions((Divisions));
        this.receiveWarehouses = this.convertSelectOptions(Warehouses);
        this.shipWarehouses = this.convertSelectOptions(Warehouses);

        for ( const user of Users) {
            const option = {};
            option['id'] = user.uuid;
            option['text'] = user.lastName + ' ' + user.firstName ;
            this.users.push(option);
        }
    }

    ngOnInit() {
    }

    selectUser(value: any): void {
        this.order.user = value;
    }

    selectDivision(value: any): void {
        this.order.division = value;
    }

    selectShipWarehouse(value: any): void {
        this.order.shipWarehouse = value;
    }

    selectReceiveWarehouse(value: any): void {
        this.order.receiveWarehouse = value;
    }

    public isValidOrder() {
        return this.order.produceProducts.length === 0;
    }


    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {
        console.log('Refresh value is ' + value);
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
