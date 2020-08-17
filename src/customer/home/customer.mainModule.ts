import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import {HomeComponent} from './customer.HomeComponent';
import {MasterpageComponent} from './customer.masterpageComponent';
import {MainRoutes} from '../Routing/customer.MainRouting';
import {DBLogger, BaseLogger, ConsoleLogger, FileLogger} from '../Utility/customer.logger';

// ILogger --> interface is not supported.
const provider = [
  { provide : BaseLogger ,  useClass: ConsoleLogger },
  { provide : "1" ,  useClass: DBLogger },
  { provide : "2" ,  useClass: FileLogger },
];

@NgModule({
  declarations: [
    HomeComponent, MasterpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [provider],
  bootstrap: [MasterpageComponent]
})
export class MainModule { }
