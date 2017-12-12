import { Component, OnInit } from '@angular/core';
import { ExpenseTransaction } from '../../../../shared/model/expense-transaction.model';
import { ExpenseTransactions } from '../../../../shared/mock/mock-expense-transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-view-expenditure',
    templateUrl: './view-expenditure.component.html',
    styleUrls: ['./view-expenditure.component.scss'],
    animations: [routerTransition()]
})
export class ViewExpenditureComponent implements OnInit {
    expenseTransactionUuid: string;
    expenseTransaction: ExpenseTransaction;
    expenseTransactions: ExpenseTransaction[];
    disabledInput: boolean = true;
    pageHeader: string;
    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.expenseTransactions = [];
        this.expenseTransaction = new ExpenseTransaction();
        for (const option of ExpenseTransactions) {
            const expenseTransaction = new ExpenseTransaction();
            this.expenseTransactions.push(expenseTransaction.fromJson(option));
        }
        this.expenseTransactionUuid = this.route.snapshot.paramMap.get('expenseTransactionUuid');
        this.disabledInput = (this.route.snapshot.paramMap.get('editable') === 'false');
        const selectExpenseTransaction = this.expenseTransactions.filter(e => e.uuid === this.expenseTransactionUuid);
        if (selectExpenseTransaction) {
            console.log(selectExpenseTransaction[0]);
            Object.assign(this.expenseTransaction, selectExpenseTransaction[0]);
        } else {
            this.router.navigate(['/not-found']);
        }
    }

    ngOnInit() {
        this.pageHeader = this.disabledInput ? '查看支出' : '修改支出';
    }
    onViewStatsChange(status: string) {
        if (status === 'view') {
            this.pageHeader = '查看订单';
        } else {
            this.pageHeader = '修改订单';
        }
    }

}
