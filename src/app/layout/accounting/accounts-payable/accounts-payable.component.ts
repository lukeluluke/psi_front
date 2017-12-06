import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Companies, Divisions, Users } from '../../../shared/mock';
import { PaginationInstance } from 'ngx-pagination';
import { Journal } from '../../../shared/model/journal.model';
@Component({
    selector: 'app-accounts-payable',
    templateUrl: './accounts-payable.component.html',
    styleUrls: ['./accounts-payable.component.scss'],
    animations: [routerTransition()]
})
export class AccountsPayableComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 4,
        currentPage: 1
    };

    payable: Journal;
    companies;
    users = [];
    divisions;

    private value: string;
    constructor() {
        this.payable = new Journal();
        this.payable.initialize();
        this.companies = this.convertSelectOptions(Companies);
        this.divisions = this.convertSelectOptions((Divisions));

        for ( const user of Users) {
            const option = {};
            option['id'] = user.uuid;
            option['text'] = user.lastName + ' ' + user.firstName ;
            this.users.push(option);
        }
    }

    ngOnInit() {
    }

    selectCompany(value: any): void {
        this.payable.company = value;
     }

    selectUser(value: any): void {
        this.payable.user = value;
    }

    selectDivision(value: any): void {
        this.payable.division = value;
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
        console.log(this.payable.journalItems);
        console.log($event);
    }

    public removePayableItem(uuid: string) {
        this.payable.journalItems =  this.payable.journalItems.filter(p => p.uuid !== uuid);
    }

    public saveOrder() {
        console.log(JSON.stringify(this.payable));
    }

    /**
     * Check if order is valid a order
     * todo: need to valid order form
     * @returns {boolean}
     */
    public isValidOrder() {
        return this.payable.journalItems.length === 0;
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
