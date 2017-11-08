import { Observable} from 'rxjs/Observable';
import { Product } from './product.model';

export class OrderProduct {
    quantity: number;
    product: Product;
    unitPrice: number;
}
