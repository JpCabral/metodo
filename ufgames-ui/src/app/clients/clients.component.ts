import { ClientsService } from '../service/clients.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Array<any>;
  client = {};
  msgError = null;
  msgSuccess = null;

  constructor(private clientService: ClientsService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.clientService.list().subscribe(dados =>
      dados.forEach(element => {
        element.dateBirth = this.datePipe.transform(element.dateBirth, "yyyy-MM-dd");
      },
        this.clients = dados
      ));
  }

  save() {
    this.clientService.save(this.client)
      .subscribe(() => {
        this.client = {};
        this.list();
        this.msgSuccess = 'Cliente criado com sucesso.';
      },
        response => {
          this.msgError = 'Nome e email do cliente não podem ser nulos.';
        }
      );

      this.msgError = null;
      this.msgSuccess = null;
  }

  delete(client: any) {
    this.clientService.delete(client)
      .subscribe(() => {
        this.list();
        this.msgSuccess = 'Cliente criado com sucesso.';
      },
        response => {
          this.msgError = 'Não foi possível excluir o cliente.';
        }
      );

      this.msgError = null;
      this.msgSuccess = null;
  }

  update(client: any) {
    this.client = client;
    client.dateBirth = this.datePipe.transform(client.dateBirth, "yyyy-MM-dd");
  }

  cancel() {
    this.client = {};
  }

}
