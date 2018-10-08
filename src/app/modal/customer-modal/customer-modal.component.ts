import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {CustomersService} from '../../shared/customers.service';


@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<CustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public customer: any, private customerService: CustomersService) {
  }

  saveCustomers(form: NgForm) {
    const {name, address, phone} = form.value;
    const editCustomer = {name, address, phone};
    this.customerService.editCustomers(editCustomer, this.customer.id)
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
