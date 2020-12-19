import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<any>;
  product = {};
  msgError = null;
  msgSuccess = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.productService.list().subscribe(dados => this.products = dados);
  }

  save() {
    this.productService.save(this.product)
      .subscribe(() => {
        this.product = {};
        this.list();
        this.msgSuccess = 'Jogo cadastrado com sucesso!';
      },
        response => {
          this.msgError = 'Nome e preço do jogo não podem ser nulos.';
        }
      );

    this.msgError = null;
    this.msgSuccess = null;
  }

  delete(product: any) {
    this.productService.delete(product)
      .subscribe(() => {
        this.list();
        this.msgSuccess = 'Jogo deletado com sucesso.';
      },
        response => {
          this.msgError = 'Não foi possível excluir o jogo.';
        }
      );

    this.msgError = null;
    this.msgSuccess = null;
  }

  update(product: any) {
    this.product = product;
  }

  cancel() {
    this.product = {};
  }

}
