import * as moment from 'moment';
import {UUID} from 'angular2-uuid';
import { OrderProduct} from './order-product.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Warehouse } from './warehouse.model';
import { Division } from './division.model';
import {BankAccount} from './bank-account.model';


export class Order {
    static TYPE_PURCHASE = 1;
    static TYPE_PURCHASE_RETURN = 2;
    static TYPE_SALE = 3;
    static TYPE_SALE_RETURN = 4;
    uuid: string;
    id: string;
    type: number;
    status: number;
    orderProducts: OrderProduct[];
    bankAccount: BankAccount;
    payAmount: number;
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
            this.bankAccount = new BankAccount();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const company = new Company();
            const warehouse = new Warehouse();
            const division = new Division();
            const bankAccount = new BankAccount();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.id = jsonData.id ? jsonData.id : '';
            this.type = jsonData.type ? jsonData.type : '';
            this.status = jsonData.status ? jsonData.status : '';
            this.user = user.fromJson(jsonData.user);
            this.bankAccount = bankAccount.fromJson(jsonData.bankAccount);
            this.payAmount = jsonData.payAmount? jsonData.payAmount : '';
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


