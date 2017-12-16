import {User} from './user.model';
import {Division} from './division.model';
import {UUID} from 'angular2-uuid';
import {Warehouse} from './warehouse.model';
import * as moment from 'moment';
import {ProduceProduct} from './produce-product.model';
import {BankAccount} from './bank-account.model';

export class ProductionOrder {
    static TYPE_PENDING = 1;
    static TYPE_FINISH = 2;
    static TYPE_DELETED = 3;
    uuid: string;
    id: number;
    status: number;
    produceProducts: ProduceProduct[];
    shipWarehouse: Warehouse;
    bankAccount: BankAccount;
    payAmount: number;
    receiveWarehouse: Warehouse;
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
            this.produceProducts = [];
            this.shipWarehouse = new Warehouse();
            this.receiveWarehouse = new Warehouse();
            this.user = new User();
            this.division = new Division();
            this.bankAccount = new BankAccount();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const shipWarehouse = new Warehouse();
            const receiveWarehouse = new Warehouse();
            const division = new Division();
            const bankAccount = new BankAccount();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.id = jsonData.id ? jsonData.id : '';
            this.status = jsonData.status ? jsonData.status : '';
            this.user = user.fromJson(jsonData.user);
            this.bankAccount = bankAccount.fromJson(jsonData.bankAccount);
            this.payAmount = jsonData.payAmount? jsonData.payAmount : '';
            this.receiveWarehouse = receiveWarehouse.fromJson(jsonData.receiveWarehouse);
            this.shipWarehouse = shipWarehouse.fromJson(jsonData.shipWarehouse);
            this.division = division.fromJson(jsonData.division);
            this.description = jsonData.description ? jsonData.description : '';
            this.extraInfo = jsonData.extraInfo ? jsonData.exact : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
            const produceProducts = [];
            if (jsonData.produceProducts && jsonData.produceProducts.length > 0 ) {
                for (const p of jsonData.produceProducts) {
                    const produceProduct = new ProduceProduct();
                    produceProducts.push(produceProduct.fromJson(p));
                }
            }

            this.produceProducts = produceProducts;
        }
        return this;
    }

}
