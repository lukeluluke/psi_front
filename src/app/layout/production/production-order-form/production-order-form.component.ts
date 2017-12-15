import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductionOrder} from '../../../shared/model/production-order';
import {PaginationInstance} from 'ngx-pagination';
import {Divisions, Users, Warehouses} from '../../../shared/mock';
import {ProduceProduct} from '../../../shared/model/produce-product.model';

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
        this.order = new ProductionOrder();
        this.order.initialize();
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
        const user = Users.filter(u => u.uuid === value.id);
        Object.assign(this.order.user, user[0]);
    }

    selectDivision(value: any): void {
        const division = Divisions.filter(d => d.uuid === value.id);
        Object.assign(this.order.division, division[0]);
    }

    selectShipWarehouse(value: any): void {
        const shipWarehouse = Warehouses.filter(w => w.uuid === value.id);
        Object.assign(this.order.shipWarehouse, shipWarehouse[0]);
    }

    selectReceiveWarehouse(value: any): void {
        const receiveWarehouse = Warehouses.filter(w => w.uuid === value.id);
        Object.assign(this.order.receiveWarehouse, receiveWarehouse[0]);
    }

    public invalidOrder() {
        return !(this.order.produceProducts.length > 0 );
    }

    public saveEditable(value) {

    }

    public removeProduceOrderProduct(uuid) {
        this.order.produceProducts = this.order.produceProducts.filter(p => p.uuid !== uuid);
    }

    /**
     * When produce produce created
     * @param {ProduceProduct} produceProduct
     */
    public onProduceProductCreate(produceProduct: ProduceProduct) {
        if (produceProduct) {
           this.order.produceProducts.unshift(produceProduct);
        }
    }

    public confirmOrder(order: ProductionOrder) {
        if (order) {
            this.orderUpdate.emit(order);
        } else {
            alert('添加失败');
        }
    }


    removed(value: any): void {
    }

    typed(value: any): void {
    }

    refreshValue(value: any): void {
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
