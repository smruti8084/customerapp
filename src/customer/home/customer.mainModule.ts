import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import {HomeComponent} from './customer.HomeComponent';
import {MasterpageComponent} from './customer.masterpageComponent';
import {MainRoutes} from '../Routing/customer.MainRouting';

@NgModule({
  declarations: [
    HomeComponent, MasterpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterpageComponent]
})
export class MainModule { }
