import { Observable} from 'rxjs/Observable';
import { OrderProduct } from './order-product.model';

export class Order {
    id: number;
    orderProducts: OrderProduct[];
}
