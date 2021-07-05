import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./interfaces"
/*firebase.google.com */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post('', user)
  }
}
