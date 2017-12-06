import { Observable} from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AccountingTransactionCategory } from './accounting-transaction-category.model'


export class AccountingTransactionItem {
    uuid: string;
    category: AccountingTransactionCategory;
    amount: number;
    note: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
        }
        return this;
    }

    fromJson(jsonData) {
        if (jsonData) {
        }
        return this;
    }
}
