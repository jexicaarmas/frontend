import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private authService: AuthService, private router: Router ) { }
  public user: UserInterface;

  ngOnInit() {
    this.user = {
      email: '', 
      password: ''
    }
   }

  onLogin(form: NgForm){
      return this.authService.loginUser(this.user.email, this.user.password)
      .subscribe(data => {
        let values = data.response; 
        this.authService.setUser(values);
        this.authService.setToken(values.access_token); 
        this.router.navigate(['/products']); 
        location.reload();
        this.isError = false;
      }, 
        error => this.onIsError()
       );
  }
}
