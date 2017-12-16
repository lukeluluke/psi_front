import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {ExpenseTransactions, Companies, Divisions, Users} from '../../../shared/mock';
import {ExpenseTransaction} from '../../../shared/model';
import {PaginationInstance} from 'ngx-pagination';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-expenditure',
    templateUrl: './expenditure.component.html',
    styleUrls: ['./expenditure.component.scss'],
    animations: [routerTransition()]
})
export class ExpenditureComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'expenditure-pagination',
        itemsPerPage: 4,
        currentPage: 1
    };
    countAllExpenseTransaction: number;
    countAllOpenExpenseTransaction: number;
    countAllClosedExpenseTransaction: number;
    countAllDeletedExpenseTransaction: number;
    expenseTransactions: ExpenseTransaction[];
    filterExpenseTransactions: ExpenseTransaction[];
    tempFilterExpenseTransactions: ExpenseTransaction[];
    companies = [];
    users = [];
    divisions = [];
    filterCompanyUuid: string = '';
    filterUserUuid: string = '';
    filterDivisionUuid: string = '';
    filterExpenseTransactionUuid: string = '';
    expenseTransactionUuid: string = '';
    visible: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.visible = false;
        this.expenseTransactions = [];
        this.companies = this.convertSelectOptions(Companies);
        this.divisions = this.convertSelectOptions((Divisions));

        for (const user of Users) {
            const option = {};
            option['id'] = user.uuid;
            option['text'] = user.lastName + ' ' + user.firstName;
            this.users.push(option);
        }
        const defaultUserOption = {
            id: -1,
            text: '显示所有'
        };
        this.users.push(defaultUserOption);

        this.filterExpenseTransactions = [];
        this.tempFilterExpenseTransactions = [];
        for (const expenseTransaction of ExpenseTransactions) {
            const option = new ExpenseTransaction();
            this.expenseTransactions.push(option.fromJson(expenseTransaction));
            console.log(expenseTransaction)
        }

        this.countAllExpenseTransaction = this.expenseTransactions.length;
        this.countAllOpenExpenseTransaction = this.filterExpenseTransactionByStatus(ExpenseTransaction.OPEN).length;
        this.countAllClosedExpenseTransaction = this.filterExpenseTransactionByStatus(ExpenseTransaction.CLOSED).length;
        this.countAllDeletedExpenseTransaction = this.filterExpenseTransactionByStatus(ExpenseTransaction.DELETED).length;
        Object.assign(this.filterExpenseTransactions, this.expenseTransactions);
        Object.assign(this.tempFilterExpenseTransactions, this.expenseTransactions);
    }

    ngOnInit() {
        this.expenseTransactionUuid = this.route.snapshot.paramMap.get('expenseTransactionUuid');
        if (this.expenseTransactionUuid) {
            this.searchExpenseTransactionByUuid(this.expenseTransactionUuid);
            this.visible = true;
        }
    }
    public removeUuidFilter() {
        this.filterExpenseTransactionUuid = '';
        this.filterExpenseTransaction()
        this.visible = false;
        this.router.navigate(['accounting/expenditure']);
    }

    public filterUser(value) {
        this.filterUserUuid = (value.id !== -1) ? value.id : '';
        this.filterExpenseTransaction();
    }

    public filterCompany(value) {
        this.filterCompanyUuid = (value.id !== -1) ? value.id : '';
        this.filterExpenseTransaction();
    }

    public filterDivision(value) {
        this.filterDivisionUuid = (value.id !== -1) ? value.id : '';
        this.filterExpenseTransaction();
    }

    public refreshValue(value) {
    }

    public removeCompany(value) {
        this.filterCompanyUuid = '';
    }

    public removeUser(value) {
        this.filterUserUuid = '';
    }

    public removeDivision(value) {
        this.filterDivisionUuid = '';
    }

    public viewExpenseTransactions(expenseTransactionUuid: string) {
        this.router.navigate(['/accounting/expenditure/view-expenditure', {
            expenseTransactionUuid: expenseTransactionUuid,
            editable: false
        }]);
    }

    public editExpenseTransactions(expenseTransactionUuid: string) {
        this.router.navigate(['/accounting/expenditure/view-expenditure', {
            expenseTransactionUuid: expenseTransactionUuid,
            editable: true
        }]);
    }

    public deleteExpenseTransactions(expenseTransactionUuid: string) {
        console.log(expenseTransactionUuid);
    }

    private filterExpenseTransactionByStatus(status: number) {
        return this.expenseTransactions.filter(e => e.status === status);
    }

    public searchExpenseTransactionByUuid(expenseTransactionUuid: string): void {
        this.filterExpenseTransactionUuid = expenseTransactionUuid;
        this.filterExpenseTransaction();
    }

    private filterExpenseTransaction() {
        let allExpenseTransactions = [];
        Object.assign(allExpenseTransactions, this.expenseTransactions);
        if (this.filterUserUuid !== '') {
            const userExpenseTransactions = allExpenseTransactions.filter(e => e.byWhom.uuid === this.filterUserUuid);
            allExpenseTransactions = [];
            Object.assign(allExpenseTransactions, userExpenseTransactions);
        }
        if (this.filterCompanyUuid !== '') {
            const companyExpenseTransactions = allExpenseTransactions.filter(e => e.toWhom.uuid === this.filterCompanyUuid);
            allExpenseTransactions = [];
            Object.assign(allExpenseTransactions, companyExpenseTransactions);
        }
        if (this.filterDivisionUuid !== '') {
            const divisionExpenseTransactions = allExpenseTransactions.filter(e => e.division.uuid === this.filterDivisionUuid);
            allExpenseTransactions = [];
            Object.assign(allExpenseTransactions, divisionExpenseTransactions);
        }
        if (this.filterExpenseTransactionUuid !== '') {
            const uuidCostTransactions = allExpenseTransactions.filter(et => et.uuid.indexOf(this.filterExpenseTransactionUuid) !== -1);
            allExpenseTransactions = [];
            Object.assign(allExpenseTransactions, uuidCostTransactions);
        }
        this.filterExpenseTransactions = [];
        Object.assign(this.filterExpenseTransactions, allExpenseTransactions);
    }

    private addExpenditure() {
        this.router.navigate(['/accounting/expenditure/create-expenditure']);
    }

    /**
     * Convert object of model to select options with key {id, text)
     * @param objects
     * @returns
     */
    private convertSelectOptions(objects) {
        const options = [];
        for (const obj of objects) {
            const option = {};
            option['id'] = obj.uuid;
            option['text'] = obj.name;
            options.push(option);
        }

        const defaultOption = {
            id: -1,
            text: '显示所有'
        };
        options.push(defaultOption);
        return options;
    }

}
