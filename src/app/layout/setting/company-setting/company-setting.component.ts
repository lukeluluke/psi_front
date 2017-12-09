import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Company} from '../../../shared/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Companies} from '../../../shared/mock';
import {CompanySettingModalComponent} from './company-setting-modal/company-setting-modal.component';
import {States} from '../../../shared/model/config.model';

@Component({
    selector: 'app-company-setting',
    templateUrl: './company-setting.component.html',
    styleUrls: ['./company-setting.component.scss'],
    animations: [routerTransition()]
})
export class CompanySettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'company-setting-pagination',
        itemsPerPage: 3,
        currentPage: 1
    };
    companies: Company[] = [];
    filterCompanies: Company[] = [];
    company: Company;
    stateOptions = [];
    selectedState = [];
    constructor(
        private modalService: NgbModal
    ) {
        for (const c of Companies) {
            const company = new Company();
            this.companies.push(company.fromJson(c));
        }
        this.stateOptions = [
            { id: 1, text: 'NSW'},
            { id: 2, text: 'SA'},
            { id: 3, text: 'TAS'},
            { id: 4, text: 'VIC'},
            { id: 5, text: 'WA'},
            { id: 6, text: 'NT'},
            { id: 7, text: 'ACT'},
            { id: 8, text: 'QLD'}
        ];
        Object.assign(this.filterCompanies, this.companies);
    }

    ngOnInit() {
    }

    public createCompany() {
        this.company = new Company();
        this.company.initialize();
        const modalRef = this.modalService.open(CompanySettingModalComponent);
        modalRef.componentInstance.company = this.company;
        modalRef.componentInstance.headerText = '添加公司';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.companyAdd.subscribe(newCompany => {
            this.onCompanyCreate(newCompany);
            modalRef.dismiss();
        });
    }

    private onCompanyCreate(company: Company) {
        this.companies.unshift(company);
        Object.assign(this.filterCompanies, this.companies);
    }

    public viewCompany(company: Company) {
        const modalRef = this.modalService.open(CompanySettingModalComponent);
        modalRef.componentInstance.company = company;
        modalRef.componentInstance.headerText = '查看公司';
        modalRef.componentInstance.disabled = true;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.selectedState = [States[company.stateId]];
    }

    public editCompany(company: Company) {
        const modalRef = this.modalService.open(CompanySettingModalComponent);
        modalRef.componentInstance.company = company;
        modalRef.componentInstance.headerText = '编辑公司';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.companyAdd.subscribe(editCompany => {
            this.onCompanyUpdate(editCompany);
            modalRef.dismiss();
        });
    }

    private onCompanyUpdate(company: Company) {
        this.filterCompanies = this.filterCompanies.filter(c => c.uuid !== company.uuid);
        this.filterCompanies.unshift(company);
    }

    public deleteCompany(company: Company) {
        this.filterCompanies = this.filterCompanies.filter(c => c.uuid !== company.uuid);
    }

    public searchCompany(event: any) {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm !== '') {
            this.filterCompanies = [];
            const findCompanies = this.companies.filter(
                c => c.name.toLowerCase().indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterCompanies, findCompanies);
        } else {
            Object.assign(this.filterCompanies, this.companies);
        }
    }

}
