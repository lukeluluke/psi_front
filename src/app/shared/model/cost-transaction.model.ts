import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { ExpenseItem } from './expense-item.model';
import { User} from './user.model';
import { Company } from './company.model';
import { Division } from './division.model';
import { CostCategory } from './cost-category.model';


export class CostTransaction {
    static OPEN = 1;
    static CLOSED = 2;
    static DELETED = 3;
    uuid: string;
    tid: string;
    status: number;
    reference: string;
    category: CostCategory;
    company: Company;
    user: User;
    division: Division;
    amount: number;
    note: string;
    createdAt: string;
    updatedAt: string;

    initialize() {
        if (!this.uuid) {
            this.uuid = UUID.UUID();
            this.tid = '';
            this.status = 0;
            this.reference = '';
            this.company = null;
            this.user = null;
            this.division = null;
            this.amount = 0;
            this.note = '';
            const timestamp = moment();
            this.createdAt = timestamp.format();
            this.updatedAt = timestamp.format();
        }
    }

    fromJson(jsonData) {
        if (jsonData) {
            const user = new User();
            const company = new Company();
            const division = new Division();
            const category = new CostCategory();
            this.uuid = jsonData.uuid ? jsonData.uuid : '';
            this.tid = jsonData.tid ? jsonData.tid : '';
            this.status = jsonData.status ? jsonData.status : '';
            this.reference = jsonData.reference ? jsonData.reference : '';
            this.category = category.fromJson(jsonData.category);
            this.company = company.fromJson(jsonData.company);
            this.user = user.fromJson(jsonData.user);
            this.division = division.fromJson(jsonData.division);
            this.amount = jsonData.amount ? jsonData.amount : 0;
            this.note = jsonData.note ? jsonData.note : '';
            this.createdAt = jsonData.createdAt ? jsonData.createdAt : '';
            this.updatedAt = jsonData.updatedAt ? jsonData.updatedAt : '';
        }
        return this;
    }
}
