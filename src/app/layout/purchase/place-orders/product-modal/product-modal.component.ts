import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrderProduct } from '../../../../shared/model/order-product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
    @Input() products = [];
    @Output() productAdd = new EventEmitter<OrderProduct>();
    closeResult: string;
  constructor(
      private modalService: NgbModal
  ) {
      console.log(' Product modal')
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
            return  `with: ${reason}`;
        }
    }

    public addProductItem(id: number): void {
        const product = this.products.filter(x => x.id === id);
        if (product) {
            // const productLength = this.orderProducts.length;
            // const selectProduct = new OrderProduct();
            // Object.assign(selectProduct, product[0]);
            // selectProduct['price'] = this.orderProducts.length;
            // selectProduct['row'] = productLength + 1;
            this.productAdd.emit(product[0]);
        }
    }

}
