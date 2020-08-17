import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router';
import { SupplierComponent } from './customer.SupplierComponent';
import { SupplierRoutes } from '../Routing/customer.SupplierRouting';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes),
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
