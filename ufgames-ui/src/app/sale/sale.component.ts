import { ProductService } from './../service/product.service';
import { SaleService } from './../service/sale.service';
import { ClientsService } from './../service/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sales: Array<any>;
  sale = {};
  clients: Array<any>;
  products: Array<any>;
  msgError = null;
  msgSuccess = null;

  constructor(private clientService: ClientsService, private productService: ProductService, private saleService: SaleService) { }

  ngOnInit() {
    this.list();
    this.clientService.list().subscribe(dados => this.clients = dados);
    this.productService.list().subscribe(dados => this.products = dados);
  }

  list() {
    this.saleService.list().subscribe(dados => this.sales = dados);
  }

  save() {
    this.saleService.save(this.sale)
      .subscribe(() => {
        this.sale = {};
        this.list();
        this.msgSuccess = 'Venda registrada com sucesso.';
      },
        response => {
          this.msgError = 'A venda precisa conter o cliente e ao menos um jogo.';
        }
      );

    this.msgError = null;
    this.msgSuccess = null;
  }

  delete(sale: any) {
    this.saleService.delete(sale)
      .subscribe(() => {
        this.list();
        this.msgSuccess = 'Venda excluída com sucesso.';
      },
        response => {
          this.msgError = 'Não foi possível remover a venda.';
        }
      );

    this.msgError = null;
    this.msgSuccess = null;
  }

  update(sale: any) {
    this.sale = sale;
  }

  cancel() {
    this.sale = {};
  }

}
