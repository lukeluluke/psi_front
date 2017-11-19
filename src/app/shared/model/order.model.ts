import { Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { OrderProduct } from './order-product.model';

export class Order {
    uuid: string;
    id: number;
    status: number;
    orderProducts: OrderProduct[];
    companyId: number;
    warehouseId: number;
    userId: number;
    divisionId: number;
    description: string;
    extraInfo: string;
    createdAt: string;
    createdBy: string;
    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.status = 1;
            this.createdAt = timestamp.format();
            this.orderProducts = [];
        }
    }
}
