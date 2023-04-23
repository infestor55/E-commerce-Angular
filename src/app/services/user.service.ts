import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/users/';

  userRegister(user: any){
    return this.http.post(this.url + 'user-register', user);
   }
  

   userLogin(user: any){
    return this.http.post(this.url + 'user-login', user);
   }
   isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true
    }else{
      return false
    }
   }

   getUserDataFromToken(){
    let token = localStorage.getItem('token')
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
   }
}
