import { product } from './../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  
  constructor( private http: HttpClient) { }
  private url = 'http://localhost:8080/products/';

    
//add product
addproduct(product: any ){
  return this.http.post(this.url + 'createProduct', product);
}
}
