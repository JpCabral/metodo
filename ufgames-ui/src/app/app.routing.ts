import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';

const APP_ROUTES: Routes = [
    {path: 'client', component: ClientsComponent},
    {path: 'product', component: ProductComponent},
    {path: 'sale', component: SaleComponent},
    {path: '', component: ClientsComponent}
];

/* Definição e configuração das rotas */
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
