import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProductInterface } from 'src/app/models/product-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private router: Router) { }
  public products: ProductInterface;
  public product: ProductInterface;
  search: string; 
  product_send:any;

  ngOnInit() {
    this.product = {
      reference: '', 
      name: '', 
      description: '',
      quantity: '',
      image: '',
      enable: '',
    }; 

    this.getListProducts();
  }

  getListProducts(): void {
    this.dataApiService
      .getAllProducts()
      .subscribe((products: ProductInterface) => (this.products = products.response));
  }

  searchProduct(){
    if(this.search){
      return this.dataApiService.seacrhProduct(this.search)
        .subscribe((products: ProductInterface) => (this.products = products.response));
    }else{
      this.getListProducts()
    }
  }

   openModalProduct(prod?){
    if(prod){
      this.product_send = prod;
    }
    $('#modal-new-product').modal({keyboard: false}, 'show')
  }

}
