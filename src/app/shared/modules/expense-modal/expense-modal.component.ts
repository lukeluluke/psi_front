import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Expenses, ExpenseCategories } from '../../mock';
import { Expense } from '../../model';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.scss']
})
export class ExpenseModalComponent implements OnInit {
    @Output() expenseAdd = new EventEmitter<Expense>();
    public pageConfig: PaginationInstance = {
        id: 'product-modal',
        itemsPerPage: 3,
        currentPage: 1
    };
    closeResult: string;
    public expenses: Expense[];
    public filterExpenses: Expense[];
    public expenseCategories;
    public selectExpenseCategoryId: string;
    constructor(private modalService: NgbModal) {
        this.expenses = [];
        this.expenseCategories = [];
        this.filterExpenses = [];
        for (const e of Expenses) {
            const expense = new Expense();
            this.expenses.push(expense.fromJson(e))
        }
        for (const ec of ExpenseCategories) {
            const expenseCategory = {};
            expenseCategory['id'] = ec.uuid;
            expenseCategory['text'] = ec.name;
            this.expenseCategories.push(expenseCategory);
        }
        const defaultExpenseCategory = {
            id: 1,
            text: '所有支持'
        };
        this.expenseCategories.push(defaultExpenseCategory);

        /**
         * Assign all products to filterProducts to avoid two objects has same reference
         */
        Object.assign(this.filterExpenses, this.expenses);
    }

    ngOnInit() {

    }

    /**
     * Open modal popup
     * @param content
     */
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    /**
     * When close modal popup
     * @param reason
     * @returns {string}
     */
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    /**
     * When click an expense, send selected expense to parent component
     * @param {string} uuid
     */
    public addExpenseItem(uuid: string): void {
        const expense = this.expenses.filter(x => x.uuid === uuid);
        if (expense) {
            this.expenseAdd.emit(expense[0]);
        } else {
            alert('Expense not found');
        }
    }

    public searchExpense(event: any): void {
        const searchTerm = event.target.value;
         if (searchTerm !== '') {
             this.filterExpenses = [];
             const findExpenses = this.expenses.filter(
                 e => e.name.indexOf(searchTerm) !== -1
             );
             Object.assign(this.filterExpenses, findExpenses);
         } else {
             Object.assign(this.filterExpenses, this.expenses);
         }
     }

     selectExpenseCategory(value: any): void {
        this.filterExpenses = [];
        const expenseCategoryId = value.id;
        let findExpenses = this.expenses;
        if (expenseCategoryId !== 1) {
            findExpenses = this.expenses.filter(e => e.expenseCategory.uuid === expenseCategoryId);
        }
        Object.assign(this.filterExpenses, findExpenses);
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
