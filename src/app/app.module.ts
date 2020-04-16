import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';

//Services
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES, 
    HttpClientModule, 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }