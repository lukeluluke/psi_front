import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../../../../shared/model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-category-setting-modal',
    templateUrl: './product-category-setting-modal.component.html',
    styleUrls: ['./product-category-setting-modal.component.scss']
})
export class ProductCategorySettingModalComponent {
    @Input() category: Category;
    @Input() disabled: boolean = true;
    @Input() headerText: string;
    @Output() categoryAdd = new EventEmitter<Category>();
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

    updateCategory(category: Category) {
        if (category && category.name) {
            this.categoryAdd.emit(category);
        } else {
            alert('请输入分类信息');
        }
    }

}
