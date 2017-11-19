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
}
