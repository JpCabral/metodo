import { HttpClientModule } from '@angular/common/http';
import { ClientsService } from './service/clients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProductComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    CurrencyMaskModule
  ],
  providers: [ClientsService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
