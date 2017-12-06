import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AccountingTransactionItem } from '../../model/accounting-transaction-item.model';
import { AccountingTransactionItemCategories } from '../../mock';
import { PaginationInstance } from 'ngx-pagination';
import { AccountingComponent } from 'app/layout/accounting/accounting.component';

@Component({
  selector: 'app-accounting-transaction-item-modal',
  templateUrl: './accounting-transaction-item-modal.component.html',
  styleUrls: ['./accounting-transaction-item-modal.component.scss']
})
export class AccountingTransactionItemModalComponent implements OnInit {
    @Output() accountingTransactionItemAdd = new EventEmitter<AccountingTransactionItem>();
    public pageConfig: PaginationInstance = {
        id: 'accounting-transaction-item-modal',
        itemsPerPage: 4,
        currentPage: 1
    };
    closeResult: string;
    public accountingTransactionItems: AccountingTransactionItem[];
    public filterAccountingTransactionItems: AccountingTransactionItem[];
    public accountingTransactionItemCategories;
    public selectAccountingTransactionItemCategoryId: string;

    constructor(private modalService: NgbModal) {
        this.accountingTransactionItems = [];
        this.accountingTransactionItemCategories = [];
        this.filterAccountingTransactionItems = [];
        for ( const i of AccountingTransactionItems ) {
            const item = new AccountingTransactionItem();
            this.accountingTransactionItems.push(item.fromJson(i));
        }

        for ( const c of AccountingTransactionItemCategories) {
            const category = {};
            category['id'] = c.uuid;
            category['text'] = c.name;
            this.accountingTransactionItemCategories.push(category);
        }

        const defaultCategory = {
            id: 1,
            text: '所有产品'
        };
        this.accountingTransactionItemCategories.push(defaultCategory);

        Object.assign(this.filterAccountingTransactionItems, this.accountingTransactionItems);
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    public addAccountingTransactionItem(uuid: string): void {
        const item = this.accountingTransactionItems.filter(x => x.uuid === uuid);
        if (item) {
            this.accountingTransactionItemAdd.emit(item[0]);
        } else {
            alert('Accounting transaction item not found');
        }
    }

    public searchAccountingTransactionItem(event: any): void {
        const searchTerm = event.target.value;
         if (searchTerm !== '') {
             this.filterAccountingTransactionItems = [];
             const findItems = this.accountingTransactionItems.filter(
                 p => p.note.indexOf(searchTerm) !== -1
             );
             Object.assign(this.filterAccountingTransactionItems, findItems);
         } else {
             Object.assign(this.filterAccountingTransactionItems, this.accountingTransactionItems);
         }
     }

     selectCategory(value: any): void {
        this.filterAccountingTransactionItems = [];
        const categoryId = value.id;
        let findItems = this.accountingTransactionItems;
        if (categoryId !== 1) {
            findItems = this.accountingTransactionItems.filter(p => p.category.uuid === categoryId);
        }
        Object.assign(this.accountingTransactionItems, findItems);
    }

    removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    typed(value: any): void {
        console.log('New search input: ', value);
    }

    refreshValue(value: any): void {

    }

}
