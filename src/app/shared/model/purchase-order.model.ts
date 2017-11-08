import { Observable} from 'rxjs/Observable';
import { Order } from './order.model';
import { Company } from './company.model';

export class PurchaseOrderModel extends Order {
    orderDate: Date;
    vendor: Company;
    vendorReference: string;
}
