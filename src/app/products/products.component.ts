import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ProductsService} from '../shared/products.service';
import {MatDialog} from '@angular/material';
import {ProductModalComponent} from '../modal/product-modal/product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', animate(
        3000,
        keyframes([
          style({
            opacity: 0, transform: 'translateX(-100%)',
            offset: 0
          }),
          style({
            opacity: 1, transform: 'translateX(40px)',
            offset: 0.3
          }),
          style({
            opacity: 1, transform: 'translateX(0)',
            offset: 1.0
          })
        ])
      )),
      transition('* => void', animate(
        1000,
        keyframes([
          style({
            opacity: 1, transform: 'translateX(0)',
            offset: 0
          }),
          style({
            opacity: 1, transform: 'translateX(-40px)',
            offset: 0.3
          }),
          style({
            opacity: 0, transform: 'translateX(70%)',
            offset: 1
          })
        ])
      )),
    ])
  ]
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private productService: ProductsService, public dialog: MatDialog) {
  }


  editProduct(product) {
    const productToEdit = Object.assign({}, product);
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '250px',
      data: productToEdit,
      id: product.id,
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.getProduct();
        }
      }
    );
  }


  addProduct(form: NgForm) {
    const {name, price} = form.value;
    const addProduct = {name, price};
    this.productService.addProduct(addProduct)
      .subscribe(() => this.getProduct(),
        error => console.log(error));
  }


  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(() => this.getProduct(),
        error => console.log(error));
  }

  getProduct() {
    this.productService.getProducts()
      .subscribe((data: any) =>
          this.products = data,
        error => console.log(error));
  }

  ngOnInit() {
    this.getProduct();
  }
}
