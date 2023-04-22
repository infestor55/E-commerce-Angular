import { product } from 'src/app/model/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-babies-shop',
  templateUrl: './babies-shop.component.html',
  styleUrls: ['./babies-shop.component.css']
})
export class BabiesShopComponent implements OnInit{
  products: any[] = []
  constructor(private productService: ProductService,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/articles/get-all-articles').subscribe((data: any) => {
    console.log(data); // print the API response to the console
    this.products = data.articles
    
  });
    
  }
  
  }

