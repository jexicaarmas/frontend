import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProductInterface } from 'src/app/models/product-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) { }
  ngOnInit() {
  }

    onLogin(form: NgForm){
      return this.authService.loginUser(this.user.email, this.user.password)
      .subscribe(data => {
        let values = data.response; 
        this.authService.setUser(values);
        this.authService.setToken(values.access_token); 
        this.router.navigate(['/products']); 
        this.isError = false;
      }, 
        error => this.onIsError()
       );
  }

  onSaveProduct(productForm: NgForm): void {
    console.log(productForm.value.enable); 
    if (productForm.value.productId == null) {
      // NEW
      return this.dataApiService.saveProduct(
        productForm.value.reference,
        productForm.value.name,
        productForm.value.description,
        productForm.value.quantity,
        productForm.value.enable
        )
      .subscribe(product => location.reload());
    } else {
      // update
      this.dataApiService.updateProduct(productForm.value).subscribe(product => location.reload());
    }
  }

}
