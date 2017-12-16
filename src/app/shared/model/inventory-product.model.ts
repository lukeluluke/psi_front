import {Product} from './product.model';
import {Warehouse} from './warehouse.model';
import {UUID} from 'angular2-uuid';

export class InventoryProduct {
    uuid: string;
    product: Product;
    quantity: number;
    warehouse: Warehouse;
    note: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.product = new Product();
            this.warehouse = new Warehouse();
            this.note = '';
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
            const product = new Product();
            const warehouse = new Warehouse();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.quantity = jsonData.quantity ? jsonData.quantity : null;
            this.product = product.fromJson(jsonData.product);
            this.warehouse = warehouse.fromJson(jsonData.warehouse);
            this.note = jsonData.note ? jsonData.note : null;
        }
        return this;
    }

}
