import {Component, Input, OnInit} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
@Component({
  selector: 'app-xpagination',
  templateUrl: './xpagination.component.html',
  styleUrls: ['./xpagination.component.scss']
})
export class XpaginationComponent implements OnInit {

    @Input() pageConfig: PaginationInstance;
    public directionLinks: boolean = true;
    public autoHide: boolean = true;
    public labels: any = {
        previousLabel: '前一页',
        nextLabel: '后一页',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };
    constructor() {

    }

    ngOnInit() {
    }

    onPageChange(number: number) {
        this.pageConfig.currentPage = number;
    }

}
