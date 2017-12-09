import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Companies, Divisions, Users } from '../../../shared/mock';
import { PaginationInstance } from 'ngx-pagination';
import { ExpenseTransaction, ExpenseItem, Expense } from '../../../shared/model/';

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

    expenseTransaction: ExpenseTransaction;
    companies;
    users = [];
    divisions;

    private value: string;
    constructor() {
        this.expenseTransaction = new ExpenseTransaction();
        this.expenseTransaction.initialize();
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
        const selectCompany = this.companies.filter(c => c.uuid === value.id);
        this.expenseTransaction.toWhom = selectCompany[0];
    }

    selectUser(value: any): void {
        const selectUser = this.users.filter(u => u.uuid === value.id);
        this.expenseTransaction.byWhom = selectUser[0];
    }

    selectDivision(value: any): void {
        const selectDivision = this.divisions.filter(d => d.uuid === value.id);
        this.expenseTransaction.division = selectDivision[0];
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

    /**
     * When user add an expense in modal popup window
     * @param {Expense} expense
     */
    onExpenseAdd(expense: Expense) {
        const expenseItem = new ExpenseItem().initialize();
        expenseItem.expense = expense;
        this.expenseTransaction.expenseItems.push(expenseItem);
    }

    public saveEditable($event) {
        console.log(this.expenseTransaction.expenseItems);
        console.log($event);
    }

    public removeExpenditureItem(uuid: string) {
        this.expenseTransaction.expenseItems = this.expenseTransaction.expenseItems.filter( ei => ei.uuid !== uuid );
    }

    public saveExpenditure() {
        console.log(JSON.stringify(this.expenseTransaction));
    }

    public isValidExpenditure() {
        return this.expenseTransaction.expenseItems.length === 0;
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
