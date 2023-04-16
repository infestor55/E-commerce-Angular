import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "http://localhost:8080/api";
  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  )
  constructor(private httpclient: HttpClient) { }


  public login (loginData){
    return this.httpclient.post(this.PATH_OF_API + "/login", loginData, {headers: this.requestHeader})
  }
   selectedUser: User = {
    name:'',
    email:'',
    password:'',
    phone:'',
    adress:''
  }
  public postUser(user: User){
    return this.httpclient.post(this.PATH_OF_API +"/register", user);
  }
}
