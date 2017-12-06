import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Companies, Divisions, Users } from '../../../shared/mock';
import { PaginationInstance } from 'ngx-pagination';
import { AccountingTransaction } from '../../../shared/model/accounting-transaction.model';

@Component({
    selector: 'app-expenditure',
    templateUrl: './expenditure.component.html',
    styleUrls: ['./expenditure.component.scss'],
    animations: [routerTransition()]
})
export class ExpenditureComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 4,
        currentPage: 1
    }

    expenditure: AccountingTransaction;
    companies;
    users = [];
    divisions;

    private value: string;
    constructor() {
        this.expenditure = new AccountingTransaction();
        this.expenditure.initialize();
        this.companies = this.convertSelectOptions(Companies);
        this.divisions = this.convertSelectOptions(Divisions);

        for ( const user of Users ) {
            const option = {};
            option['id'] = user. uuid;
            option['text'] = user.lastName + ' ' + user.firstName;
            this.users.push(option);
        }
    }
    ngOnInit() {
    }

    selectCompany(value: any): void {
        this.expenditure.company = value;
    }

    selectUser(value: any): void {
        this.expenditure.user = value;
    }

    selectDivision(value: any): void {
        this.expenditure.division = value;
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {
        this.value = value;
    }

    public saveEditable($event) {
        console.log(this.expenditure.accountingTransactionItems);
        console.log($event);
    }

    public removeExpenditureItem(uuid: string) {
        this.expenditure.accountingTransactionItems = this.expenditure.accountingTransactionItems.filter( t => t.uuid !== uuid );
    }

    public saveExpenditureItem() {
        console.log(JSON.stringify(this.expenditure));
    }

    public isValidOrder() {
        return this.expenditure.accountingTransactionItems.length === 0;
    }


    private convertSelectOptions(objects) {
        const options = [];
        for ( const obj of objects) {
            const option = {};
            option['id'] = obj.uuid;
            option['text'] = obj.name;
            options.push(option);
        }
        return options;
    }

}
