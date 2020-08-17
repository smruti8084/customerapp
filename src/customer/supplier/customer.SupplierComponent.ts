import { Component } from '@angular/core';
import {BaseLogger} from '../Utility/customer.logger';

@Component({
  templateUrl: './customer.supplierView.html',
})

export class SupplierComponent {

  loggerObj : BaseLogger = null;
  constructor(_logger: BaseLogger) {
    this.loggerObj = _logger;
    this.loggerObj.Log();
  }
}
