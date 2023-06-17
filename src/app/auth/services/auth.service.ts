import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private headers = new HttpHeaders({'Conten-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})

  url = environment.url
  constructor(
    private http: HttpClient,
  ) { }

  userLogin = (payLoad: Login) => {
    return this.http.post(`${this.url}/auth/login/`, payLoad, { withCredentials: true })
  }
}
