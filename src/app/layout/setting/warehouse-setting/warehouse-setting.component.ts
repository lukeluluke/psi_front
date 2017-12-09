import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {routerTransition} from '../../../router.animations';
import {Warehouse} from '../../../shared/model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Warehouses} from '../../../shared/mock';
import {WarehouseSettingModalComponent} from './warehouse-setting-modal/warehouse-setting-modal.component';
import {States} from '../../../shared/model/config.model';

@Component({
    selector: 'app-warehouse-setting',
    templateUrl: './warehouse-setting.component.html',
    styleUrls: ['./warehouse-setting.component.scss'],
    animations: [routerTransition()]
})
export class WarehouseSettingComponent implements OnInit {
    public pageConfig: PaginationInstance = {
        id: 'user-setting-pagination',
        itemsPerPage: 3,
        currentPage: 1
    };
    warehouses: Warehouse[] = [];
    filterWarehouses: Warehouse[] = [];
    warehouse: Warehouse;
    stateOptions = [];
    selectedState = [];
    constructor(
        private modalService: NgbModal
    ) {
        for (const w of Warehouses) {
            const warehouse = new Warehouse();
            this.warehouses.push(warehouse.fromJson(w));
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
        Object.assign(this.filterWarehouses, this.warehouses);
    }

    ngOnInit() {
    }

    public createWarehouse() {
        this.warehouse = new Warehouse();
        this.warehouse.initialize();
        const modalRef = this.modalService.open(WarehouseSettingModalComponent);
        modalRef.componentInstance.warehouse = this.warehouse;
        modalRef.componentInstance.headerText = '添加仓库';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.warehouseAdd.subscribe(newWarehouse => {
            this.onWarehouseCreate(newWarehouse);
            modalRef.dismiss();
        });
    }

    private onWarehouseCreate(newWarehouse: Warehouse) {
        this.warehouses.unshift(newWarehouse);
        Object.assign(this.filterWarehouses, this.warehouses);
    }

    public viewWarehouse(warehouse: Warehouse) {
        const modalRef = this.modalService.open(WarehouseSettingModalComponent);
        modalRef.componentInstance.warehouse = warehouse;
        modalRef.componentInstance.headerText = '查看仓库';
        modalRef.componentInstance.disabled = true;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.selectedState = [States[warehouse.stateId]];
    }

    public editWarehouse(warehouse: Warehouse) {
        const modalRef = this.modalService.open(WarehouseSettingModalComponent);
        modalRef.componentInstance.warehouse = warehouse;
        modalRef.componentInstance.headerText = '编辑仓库';
        modalRef.componentInstance.disabled = false;
        modalRef.componentInstance.stateOptions = this.stateOptions;
        modalRef.componentInstance.selectedState = [States[warehouse.stateId]];
        modalRef.componentInstance.warehouseAdd.subscribe(editWarehouse => {
            this.onWarehouseUpdate(editWarehouse);
            modalRef.dismiss();
        });
    }

    private onWarehouseUpdate(editWarehouse: Warehouse) {
        this.filterWarehouses = this.filterWarehouses.filter(w => w.uuid !== editWarehouse.uuid);
        this.filterWarehouses.unshift(editWarehouse);
    }

    public searchWarehouse(event: any) {
        const searchTerm = event.target.value;
        if (searchTerm !== '') {
            // let findProducts = this.products;
            this.filterWarehouses = [];
            const findWarehouses = this.warehouses.filter(
                w => w.name.indexOf(searchTerm) !== -1
            );
            Object.assign(this.filterWarehouses, findWarehouses);
        } else {
            Object.assign(this.filterWarehouses, this.warehouses);
        }
    }
    public deleteWarehouse() {

    }
}
