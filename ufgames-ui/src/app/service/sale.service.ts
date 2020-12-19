import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  saleUrl = 'http://localhost:8084/sale'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<any[]>(`${this.saleUrl}`);
  }

  save(sale: any){
    return this.httpClient.post(this.saleUrl, sale);
  }

  delete(sale: any){
    return this.httpClient.delete(this.saleUrl+'/'+sale.id);
  }

}

