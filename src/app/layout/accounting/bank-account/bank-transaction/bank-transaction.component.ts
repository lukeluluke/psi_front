import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { BankAccountTransactions } from '../../../../shared/mock';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountTransaction } from '../../../../shared/model/bank-account-transaction.model';


@Component({
    selector: 'app-bank-transaction',
    templateUrl: './bank-transaction.component.html',
    styleUrls: ['./bank-transaction.component.scss'],
    animations: [routerTransition()]
})
export class BankTransactionComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'cost-pagination',
        itemsPerPage: 4,
        currentPage: 1
    };
    bankAccountName: string;
    bankAccountTransactions: BankAccountTransaction[];
    constructor(private route: ActivatedRoute, private router: Router) {
        this.bankAccountName = this.route.snapshot.paramMap.get('bankAccountName');
        this.bankAccountTransactions = [];
        for (const bankAccountTransaction of BankAccountTransactions) {
            const option = new BankAccountTransaction();
            this.bankAccountTransactions.push(option.fromJson(bankAccountTransaction));
            console.log(bankAccountTransaction)
        }
    }

    ngOnInit() {
    }
    public viewBankAccountTransaction(reference: string) {
        if (reference === '5dc3278d-2825-3d57-d928-5e11c7ddb5e9') {
            this.router.navigate(['/accounting/expenditure', {
                expenseTransactionUuid: reference,
                editable: false
            }]);
        } else if (reference === '4397337a-8c84-46b2-9ced-6b5e6346a11e') {
            this.router.navigate(['/accounting/cost', {
                costTransactionUuid: reference,
                editable: false
            }]);
        }
    }

}
