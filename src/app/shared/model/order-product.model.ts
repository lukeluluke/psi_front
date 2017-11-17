import { Observable} from 'rxjs/Observable';
import { Product } from './product.model';

export class OrderProduct {
    id: number;
    product: Product;
    quantity: number;
    unitPrice: number;
    amount: number;
    status: number;
    note: string;
    stockQuantity: number;
}
