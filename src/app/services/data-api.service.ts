import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { ProductInterface } from 'src/app/models/product-interface';  
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  products: Observable<any>;
  product: Observable<any>;
  public selectedProduct: ProductInterface = {
    id: null,
    reference: '',
    name: '',
    descripcion: '',
    quantity: '',
    image: '',
    enable: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'AppKey': '5kEDnKkipeSRRhcUkW8u7w2U5dFB3bwuUaRTHS7YNtAXFkgNe8qXfugpYvtxNUpgXiUjrqMgkSQcCpej', 
     'Authorization': 'Bearer '+this.authService.getToken()
  });

  getAllProducts() {
    const url_api = "http://backend.test/api/products";
    return this.http.get(url_api, { headers: this.headers });
  }

  seacrhProduct(value: string) : Observable<any> {
    const url_api = "http://backend.test/api/products/search";
    return this.http
      .post<ProductInterface>(
        url_api, 
        { value }, 
        { headers: this.headers }
       )
      .pipe(map(data => data));
  }

  saveProduct(reference: string, name: string, description: string, quantity: number, image: string,  enable:boolean) : Observable<any> {
    const url_api = "http://backend.test/api/products";
    return this.http
      .post<ProductInterface>(
        url_api, 
        { reference, name, description, quantity, image, enable }, 
        { headers: this.headers })
      .pipe(map(data => data));
  }
}

