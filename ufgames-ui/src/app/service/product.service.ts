import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://localhost:8084/product';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<any[]>(`${this.productUrl}`);
  }

  save(product: any){
    return this.httpClient.post(this.productUrl, product);
  }

  delete(product: any){
    return this.httpClient.delete(this.productUrl + '/' + product.id);
  }

}
