import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CostTransactions, Companies, Divisions, Users } from '../../../shared/mock';
import { CostTransaction } from '../../../shared/model';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { CostCategory } from '../../../shared/model/cost-category.model';

@Component({
    selector: 'app-cost',
    templateUrl: './cost.component.html',
    styleUrls: ['./cost.component.scss'],
    animations: [routerTransition()]
})
export class CostComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'cost-pagination',
        itemsPerPage: 4,
        currentPage: 1
    };
    countAllCostTransaction: number;
    countAllOpenCostTransaction: number;
    countAllClosedCostTransaction: number;
    countAllDeletedCostTransaction: number;
    costTransactions: CostTransaction[];
    filterCostTransactions: CostTransaction[];
    tempFilterCostTransactions: CostTransaction[];
    companies = [];
    users = [];
    divisions = [];
    filterCompanyUuid: string = '';
    filterUserUuid: string = '';
    filterDivisionUuid: string = '';
    filterCostTransactionUuid: string = '';
    costTransactionUuid: string = '';
    visible: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.visible = false;
        this.costTransactions = [];
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

        this.filterCostTransactions = [];
        this.tempFilterCostTransactions = [];
        for (const costTransaction of CostTransactions) {
            const option = new CostTransaction();
            this.costTransactions.push(option.fromJson(costTransaction));
            console.log(costTransaction)
        }

        this.countAllCostTransaction = this.costTransactions.length;
        this.countAllOpenCostTransaction = this.filterCostTransactionByStatus(CostTransaction.OPEN).length;
        this.countAllClosedCostTransaction = this.filterCostTransactionByStatus(CostTransaction.CLOSED).length;
        this.countAllDeletedCostTransaction = this.filterCostTransactionByStatus(CostTransaction.DELETED).length;
        Object.assign(this.filterCostTransactions, this.costTransactions);
        Object.assign(this.tempFilterCostTransactions, this.costTransactions);
    }

    ngOnInit() {
        this.costTransactionUuid = this.route.snapshot.paramMap.get('costTransactionUuid');
        if (this.costTransactionUuid) {
            this.searchCostTransactionByUuid(this.costTransactionUuid);
            this.visible = true;
        }
    }
    public removeUuidFilter() {
        this.filterCostTransactionUuid = '';
        this.filterCostTransaction()
        this.visible = false;
        this.router.navigate(['accounting/cost']);
    }
    public filterUser(value) {
        this.filterUserUuid = (value.id !== -1) ? value.id : '';
        this.filterCostTransaction();
    }

    public filterCompany(value) {
        this.filterCompanyUuid = (value.id !== -1) ? value.id : '';
        this.filterCostTransaction();
    }

    public filterDivision(value) {
        this.filterDivisionUuid = (value.id !== -1) ? value.id : '';
        this.filterCostTransaction();
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

    public viewReference(reference: string, category: CostCategory) {
        if (category.name === '采购成本') {
            this.router.navigate(['/purchase/view-purchase-order', {
                orderUuid: reference,
                editable: false
            }]);
        }
    }

    private filterCostTransactionByStatus(status: number) {
        return this.costTransactions.filter(c => c.status === status);
    }

    public searchCostTransactionByUuid(costTransactionUuid: string): void {
        this.filterCostTransactionUuid = costTransactionUuid;
        this.filterCostTransaction();
    }

    private filterCostTransaction() {
        let allCostTransactions = [];
        Object.assign(allCostTransactions, this.costTransactions);
        if (this.filterUserUuid !== '') {
            const userCostTransactions = allCostTransactions.filter(c => c.user.uuid === this.filterUserUuid);
            allCostTransactions = [];
            Object.assign(allCostTransactions, userCostTransactions);
        }
        if (this.filterCompanyUuid !== '') {
            const companyCostTransactions = allCostTransactions.filter(c => c.company.uuid === this.filterCompanyUuid);
            allCostTransactions = [];
            Object.assign(allCostTransactions, companyCostTransactions);
        }
        if (this.filterDivisionUuid !== '') {
            const divisionCostTransactions = allCostTransactions.filter(c => c.division.uuid === this.filterDivisionUuid);
            allCostTransactions = [];
            Object.assign(allCostTransactions, divisionCostTransactions);
        }
        if (this.filterCostTransactionUuid !== '') {
            const uuidCostTransactions = allCostTransactions.filter(ct => ct.uuid.indexOf(this.filterCostTransactionUuid) !== -1);
            allCostTransactions = [];
            Object.assign(allCostTransactions, uuidCostTransactions);
        }
        this.filterCostTransactions = [];
        Object.assign(this.filterCostTransactions, allCostTransactions);
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
