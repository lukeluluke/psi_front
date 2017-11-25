import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {UUID} from 'angular2-uuid';
import { OrderProduct} from './order-product.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Warehouse } from './warehouse.model';
import { Division } from './division.model';


export class Order {
    static PENDING = 1;
    static FINISH = 2;
    static DELETED = 3;
    static RETURN = 4;
    uuid: string;
    id: number;
    status: number;
    orderProducts: OrderProduct[];
    company: Company;
    warehouse: Warehouse;
    user: User;
    division: Division;
    description: string;
    extraInfo: string;
    createdAt: string;
    updatedAt: string;
    initialize() {
        if (!this.uuid) {
            const timestamp = moment();
            this.uuid = UUID.UUID();
            this.status = 1;
            this.createdAt = timestamp.format();
            this.orderProducts = [];
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const company = new Company();
            const warehouse = new Warehouse();
            const division = new Division();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.id = jsonData.id ? jsonData.id : '';
            this.status = jsonData.status ? jsonData.status : '';
            this.user = user.fromJson(jsonData.user);
            this.company = company.fromJson(jsonData.company);
            this.warehouse = warehouse.fromJson(jsonData.warehouse);
            this.division = division.fromJson(jsonData.division);
            this.description = jsonData.description ? jsonData.description : '';
            this.extraInfo = jsonData.extraInfo ? jsonData.exact : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
            const orderProducts = [];
            if (jsonData.orderProducts && jsonData.orderProducts.length > 0 ) {
                for (const p of jsonData.orderProducts) {
                    const orderProduct = new OrderProduct();
                    orderProducts.push(orderProduct.fromJson(p));
                }
            }
            this.orderProducts = orderProducts;
        }
        return this;
    }
}


