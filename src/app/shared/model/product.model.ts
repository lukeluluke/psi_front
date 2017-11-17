import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';

export class Product {
    uuid: string;
    categoryId: string;
    sku: string;
    name: string;
    barcode: string;
    spec: string;
    model: string;
    price: number;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
            return this;
        }
    }
}
