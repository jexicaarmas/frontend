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

  saveProduct(reference: string, name: string, description: string, quantity: number, enable:boolean) : Observable<any> {
    const url_api = "http://backend.test/api/products";
    let image = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.stack.imgur.com%2Fxbil8.png&imgrefurl=https%3A%2F%2Fes.stackoverflow.com%2Fquestions%2F220272%2Fcomo-subir-imagen-en-laravel&tbnid=SnZzyDu1xTrGMM&vet=12ahUKEwid0a3H9O3oAhV0WDABHYfFBQEQMygBegUIARDXAQ..i&docid=EKcnf2wW9f2vMM&w=779&h=554&q=imagen%20publica%20laravel&ved=2ahUKEwid0a3H9O3oAhV0WDABHYfFBQEQMygBegUIARDXAQ'; 
    return this.http
      .post<ProductInterface>(
        url_api, 
        { reference, name, description, quantity, image, enable }, 
        { headers: this.headers })
      .pipe(map(data => data));
  }
}

