import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BankAccounts } from '../../../shared/mock';
import { BankAccount } from '../../../shared/model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-bank-account',
    templateUrl: './bank-account.component.html',
    styleUrls: ['./bank-account.component.scss'],
    animations: [routerTransition()]
})
export class BankAccountComponent implements OnInit {
    bankAccounts: BankAccount[];
    constructor(private router: Router) {
        this.bankAccounts = [];
        for (const bankAccount of BankAccounts) {
            const option = new BankAccount();
            this.bankAccounts.push(option.fromJson(bankAccount));
            console.log(bankAccount);
        }
    }

    ngOnInit() {
    }

    public viewTransactions(bankAccountUuid: string) {
        this.router.navigate(['/accounting/bank-transaction', {
            bankAccountUuid: bankAccountUuid
        }]);
    }

}
