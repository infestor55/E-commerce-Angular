import { product } from './../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
 /* public addProduct(product: FormData){
    return this.httpClient.post<product>("http://localhost:8080/api/articles/create-article", product);
  }*/
}
