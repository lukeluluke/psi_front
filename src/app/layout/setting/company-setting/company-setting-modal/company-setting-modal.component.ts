import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../../../shared/model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-company-setting-modal',
    templateUrl: './company-setting-modal.component.html',
    styleUrls: ['./company-setting-modal.component.scss']
})
export class CompanySettingModalComponent {
    @Input() company: Company;
    @Input() disabled: boolean;
    @Input() headerText: string;
    @Input() selectedState;
    @Input() stateOptions;
    @Output() companyAdd = new EventEmitter<Company>();
    constructor(
        public activeModal: NgbActiveModal
    ) {

    }

    /**
     * When close modal popup
     * @returns {string}
     */
    closeModal() {
        this.activeModal.dismiss('Close');
    }

    selectState(value: any) {
        this.company.stateId = value.id;
    }

    updateCompany(company: Company) {
        if (company && company.name && company.stateId) {
            this.companyAdd.emit(company);
        } else {
            alert('请输入完整公司信息');
        }
    }

    refreshValue() {

    }

    removed() {

    }

    typed() {

    }


}
