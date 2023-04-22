import { product } from './../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:8080/api/articles';
  
  constructor( public fb: FormBuilder,
    private httpClient:HttpClient) { }
    

    article: 
    FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      articleImage: ['', [Validators.required]]
        })
       //form reset
formReset(){
  this.article.reset();
  this.article =  this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    color: [''],

      })
} 
//add user
addproduct(){
  console.log(this.article.value)
  return this.httpClient.post(`${this.baseURL}/create-article`, this.article.value)
  
}
}
