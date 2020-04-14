import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
     
    path: '',
        component: PagesComponent,
        children: [
            { path: 'products', component: ProductsComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
