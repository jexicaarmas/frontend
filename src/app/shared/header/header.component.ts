import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( private authService: AuthService,  private router: Router ) { }

  ngOnInit(): void {
  }

  onLogout():void{
    this.authService.logoutUser(); 
    this.router.navigate(['/login']) 
  }

}
