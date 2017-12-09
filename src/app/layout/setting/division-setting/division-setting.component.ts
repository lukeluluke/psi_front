import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {PaginationInstance} from 'ngx-pagination';
import {Division} from '../../../shared/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Divisions} from '../../../shared/mock';
import {DivisionSettingModalComponent} from './division-setting-modal/division-setting-modal.component';

@Component({
    selector: 'app-division-setting',
    templateUrl: './division-setting.component.html',
    styleUrls: ['./division-setting.component.scss'],
    animations: [routerTransition()]
})
export class DivisionSettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 3,
        currentPage: 1
    };
    divisions: Division[] = [];
    filterDivisions: Division[] = [];
    division: Division;
    constructor(
        private modalService: NgbModal
    ) {
        for (const d of Divisions) {
            const division = new Division();
            this.divisions.push(division.fromJson(d));
        }

        Object.assign(this.filterDivisions, this.divisions);
    }

    ngOnInit() {
    }

    public createDivision() {
        this.division = new Division();
        this.division.initialize();
        const modalRef = this.modalService.open(DivisionSettingModalComponent);
        modalRef.componentInstance.division = this.division;
        modalRef.componentInstance.headerText = '添加部门';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.divisionAdd.subscribe(newDivision => {
            this.onDivisionCreate(newDivision);
            modalRef.dismiss();
        });
    }

    private onDivisionCreate(division: Division) {
        this.divisions.unshift(division);
        Object.assign(this.filterDivisions, this.divisions);
    }

    public viewDivision(division: Division) {
        const modalRef = this.modalService.open(DivisionSettingModalComponent);
        modalRef.componentInstance.division = division;
        modalRef.componentInstance.headerText = '查看部门';
        modalRef.componentInstance.disabled = true;
    }

    public editDivision(division: Division) {
        const modalRef = this.modalService.open(DivisionSettingModalComponent);
        modalRef.componentInstance.division = division;
        modalRef.componentInstance.headerText = '编辑部门';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.divisionAdd.subscribe(editDivision => {
            this.onDivisionUpdate(editDivision);
            modalRef.dismiss();
        });
    }

    private onDivisionUpdate(division: Division) {
        this.filterDivisions = this.filterDivisions.filter(f => f.uuid !== division.uuid);
        this.filterDivisions.unshift(division);
    }

    public deleteDivision(division: Division) {
        this.filterDivisions = this.filterDivisions.filter(f => f.uuid !== division.uuid);
    }

    public searchDivision(event: any) {
        const searchTerm = event.target.value;
        if (searchTerm !== '') {
            this.filterDivisions = [];
            const findDivisions = this.divisions.filter(
                d => d.name.indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterDivisions, findDivisions);
        } else {
            Object.assign(this.filterDivisions, this.divisions);
        }
    }

}
