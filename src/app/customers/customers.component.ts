import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {CustomerModalComponent} from '../modal/customer-modal/customer-modal.component';
import {MatDialog} from '@angular/material';
import {CustomersService} from '../shared/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', animate(
        2000,
        keyframes([
          style({
            opacity: 0, transform: 'translateX(-100%)',
            offset: 0
          }),
          style({
            opacity: 1, transform: 'translateX(20px)',
            offset: 0.7
          }),
          style({
            opacity: 1, transform: 'translateX(0)',
            offset: 1.0
          })
        ])
      )),
      transition('* => void', animate(
        2000,
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
      ))
    ])
  ]
})

export class CustomersComponent implements OnInit {
  customers = [];


  constructor(private customersService: CustomersService, public dialog: MatDialog) {
  }

  editCustomer(customer) {
    const customerToEdit = Object.assign({}, customer);
    const dialogRef = this.dialog.open(CustomerModalComponent, {
      width: '250px',
      data: customerToEdit,
      id: customer.id,
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.getCustomer();
        }
      }
    );
  }


  addCustomers(form: NgForm) {
    const {name, address, phone} = form.value;
    const addCustomer = {name, address, phone};
    this.customersService.addCustomers(addCustomer)
      .subscribe(() => this.getCustomer(),
        error => console.log('error'));
  }

  deleteCustomer(id) {
    this.customersService.deleteCustomers(id)
      .subscribe(() => this.getCustomer(),
        error => console.log('error'));
  }

  getCustomer() {
    this.customersService.getCustomers()
      .subscribe((data: any) =>
          this.customers = data,
        error => console.log(error));
  }


  ngOnInit() {
    this.getCustomer();
  }

}
