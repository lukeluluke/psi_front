import { Observable} from 'rxjs/Observable';
import { Product } from './product.model';
import { UUID } from 'angular2-uuid';

export class OrderProduct {
    uuid: string;
    product: Product;
    quantity: number;
    unitPrice: number;
    amount: number;
    note: string;
    stockQuantity: number;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.product = new Product();
            this.quantity = 1;
            this.note = '';
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
            const product = new Product();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.quantity = jsonData.quantity ? jsonData.quantity : null;
            this.unitPrice = jsonData.unitPrice ? jsonData.unitPrice : null;
            this.amount = jsonData.amount ? jsonData.amount : null;
            this.note = jsonData.note ? jsonData.note : '';
            this.product = product.fromJson(jsonData.product);
        }
        return this;
    }
}
