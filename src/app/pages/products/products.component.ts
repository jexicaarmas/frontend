import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProductInterface } from 'src/app/models/product-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private products: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(): void {
    this.dataApiService
      .getAllProducts()
      .subscribe((products: ProductInterface) => (this.products = products.response));
  }


}
