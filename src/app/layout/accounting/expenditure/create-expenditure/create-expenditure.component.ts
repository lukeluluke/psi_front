import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import {ExpenseTransaction} from '../../../../shared/model/expense-transaction.model';

@Component({
    selector: 'app-create-expenditure',
    templateUrl: './create-expenditure.component.html',
    styleUrls: ['./create-expenditure.component.scss'],
    animations: [routerTransition()]
})
export class CreateExpenditureComponent implements OnInit {
    expenseTransaction: ExpenseTransaction;
    disabledInput: boolean = false;
    constructor() {
        this.expenseTransaction = new ExpenseTransaction();
        this.expenseTransaction.initialize();
    }

    ngOnInit() {
    }

    /**
     * When user create a Order
     * @param {Order} order
     */
    onExpenseTransactionCreate(expenseTransaction: ExpenseTransaction) {
        if (expenseTransaction) {
            this.expenseTransaction = expenseTransaction;
            console.log(JSON.stringify(this.expenseTransaction));
            alert('An expense transaction was created, :)');
        }
    }

}
