import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientUrl = 'http://localhost:8084/client'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<any[]>(`${this.clientUrl}`);
  }

  save(client: any){
    return this.httpClient.post(this.clientUrl, client);
  }

  delete(client: any){
    return this.httpClient.delete(this.clientUrl+'/'+client.id);
  }
  
}
