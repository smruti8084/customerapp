import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CustomerComponent } from './customer.customerComponent';
import { CustomerRoutes } from '../Routing/customer.CustomerRouting';
@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
