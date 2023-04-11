import { product } from './../model/product.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  public addProduct(product: FormData){
    return this.httpClient.post<product>("http://localhost:8080/api/articles/create-article", product);
  }
}
