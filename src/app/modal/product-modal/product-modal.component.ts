import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../shared/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any, private productsService: ProductsService) {
  }

  saveProduct(form: NgForm) {
    const {name, price} = form.value;
    const editProduct = {name, price};
    this.productsService.editProduct(editProduct, this.product.id)
      .subscribe(() => this.dialogRef.close(true),
        error => console.log('error')
      );
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

