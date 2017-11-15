import { Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import { OrderProduct } from './order-product.model';

export class Order {
    uuid: string;
    id: number;
    orderProducts: OrderProduct[];
    created: string;
}
