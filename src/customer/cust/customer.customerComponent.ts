import { Component, Injector } from '@angular/core';
import {Customer} from './customer.model';
import {BaseLogger} from '../Utility/customer.logger';

@Component({
  templateUrl: './customer.customerView.html',
})
export class CustomerComponent {
  title = 'customer Application';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();

  loggerObj : BaseLogger = null;
  constructor(_injector: Injector) {
    this.loggerObj = _injector.get("2");
    this.loggerObj.Log();
  }
  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer(); //Clear the UI.
  }

  // hasError(controlName: string) : string {
  //     return this.customerModel.formCustomerGroup.
  //           contains[controlName];
  // }

}
