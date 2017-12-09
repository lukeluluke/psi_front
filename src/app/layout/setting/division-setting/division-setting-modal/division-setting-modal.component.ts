import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Division} from '../../../../shared/model';
import {OutputDef} from '@angular/core/src/view';

@Component({
    selector: 'app-division-setting-modal',
    templateUrl: './division-setting-modal.component.html',
    styleUrls: ['./division-setting-modal.component.scss']
})
export class DivisionSettingModalComponent {
    @Input() division: Division;
    @Input() disabled: boolean = true;
    @Input() headerText: string;
    @Output() divisionAdd = new EventEmitter<Division>();
    constructor(public activeModal: NgbActiveModal) {
    }

    /**
     * When close modal popup
     * @returns {string}
     */
    closeModal() {
        this.activeModal.dismiss('Close');
    }

    updateDivision(division: Division) {
        if (division && division.name) {
            this.divisionAdd.emit(division);
        } else {
            alert('请输入部门信息');
        }
    }
}
