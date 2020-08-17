import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/customer.logger';

@Component({
  templateUrl: './customer.HomeView.html',
})

export class HomeComponent {  

  loggerObj : BaseLogger = null;
  constructor(_logger: BaseLogger) {
    this.loggerObj = _logger;
    this.loggerObj.Log();
  }
  
}
