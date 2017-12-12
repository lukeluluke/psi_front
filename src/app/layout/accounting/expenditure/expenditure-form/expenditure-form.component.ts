import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Companies, Divisions, Users } from '../../../../shared/mock';
import { PaginationInstance } from 'ngx-pagination';
import { ExpenseTransaction, ExpenseItem, Expense } from '../../../../shared/model/';

@Component({
    selector: 'app-expenditure-form',
    templateUrl: './expenditure-form.component.html',
    styleUrls: ['./expenditure-form.component.scss'],
    animations: [routerTransition()]
})
export class ExpenditureFormComponent implements OnInit {
    @Input() expenseTransaction: ExpenseTransaction;
    @Input() disabled: boolean = true;
    @Output() expenseTransactionUpdate = new EventEmitter<ExpenseTransaction>();
    @Output() viewStatus = new EventEmitter<string>();
    public pageConfig: PaginationInstance = {
        id: 'expenditure-pagination',
        itemsPerPage: 10,
        currentPage: 1
    }
    companies;
    users = [];
    divisions;

    selectedCompany = [];
    selectedUser = [];
    selectedDivision = [];

    private value: string;
    constructor() {
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
        /**
         * Need to setup default options for drop down list
         */
        if (this.expenseTransaction.toWhom) {
            const selectCompany = this.companies.filter(c => c.id === this.expenseTransaction.toWhom.uuid);
            if (selectCompany) {
                this.selectedCompany.push(this.expenseTransaction.toWhom.name);
            }
        }
        if (this.expenseTransaction.byWhom) {
            const selectUser = this.users.filter(u => u.id === this.expenseTransaction.byWhom.uuid);
            if (selectUser) {
                this.selectedUser.push(this.expenseTransaction.byWhom.getFullName());
            }
        }
        if (this.expenseTransaction.division) {
            const selectDivision = this.divisions.filter(d => d.id === this.expenseTransaction.division.uuid);
            if (selectDivision) {
                this.selectedDivision.push(this.expenseTransaction.division.name);
            }
        }

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

    public saveExpenditure(expenseTransaction: ExpenseTransaction) {
        if (this.expenseTransaction) {
            this.expenseTransactionUpdate.emit(expenseTransaction);
        }
    }

    public editExpenditure() {
        this.viewStatus.emit('edit');
        this.disabled = false;
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
