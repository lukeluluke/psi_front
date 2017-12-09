import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category, Warehouse} from '../../../../shared/model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-warehouse-setting-modal',
    templateUrl: './warehouse-setting-modal.component.html',
    styleUrls: ['./warehouse-setting-modal.component.scss']
})
export class WarehouseSettingModalComponent {
    @Input() warehouse: Warehouse;
    @Input() disabled: boolean;
    @Input() headerText: string;
    @Input() selectedState;
    @Input() stateOptions;
    @Output() warehouseAdd = new EventEmitter<Warehouse>();
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
        this.warehouse.stateId = value.id;
    }

    updateWarehouse(warehouse: Warehouse) {
        if (warehouse && warehouse.name && warehouse.stateId) {
            this.warehouseAdd.emit(warehouse);
        } else {
            alert('请输入仓库信息');
        }
    }

    refreshValue() {

    }

    removed() {

    }

    typed() {

    }

}
