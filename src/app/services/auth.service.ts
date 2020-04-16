import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { UserInterface } from "../models/user-interface";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json", 
    "AppKey": "5kEDnKkipeSRRhcUkW8u7w2U5dFB3bwuUaRTHS7YNtAXFkgNe8qXfugpYvtxNUpgXiUjrqMgkSQcCpej"
  });


  loginUser(email: string, password: string): Observable<any> {
    const url_api = "http://backend.test/api/login";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = "http://backend.test/api/logout";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
}
