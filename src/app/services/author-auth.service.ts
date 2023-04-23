import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorAuthService {

  constructor( private http: HttpClient) { }
  private url = 'http://localhost:8080/author/';

  register(author: any){
   return this.http.post(this.url + 'register', author);
  }
}
