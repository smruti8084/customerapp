import { Component } from '@angular/core';
import {Customer} from './customer.model';

@Component({
  templateUrl: './customer.customerView.html',
})
export class CustomerComponent {
  title = 'customer Application';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();

  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer(); //Clear the UI.
  }

  // hasError(controlName: string) : string {
  //     return this.customerModel.formCustomerGroup.
  //           contains[controlName];
  // }

}
