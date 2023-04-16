
import { ProductService } from './../services/product.service';
import { Form, NgForm } from '@angular/forms';
import { product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent implements OnInit {
  article = {
    name: '',
    description: '',
    price: '',
    color: '',
    images: []
  };
  constructor(private HttpClient: HttpClient) { }
  ngOnInit():void {

  }
  onFileSelected(event) {
    this.article.images = event.target.files[0];
    //envoyer les images vers le back
    // back va retourner les urls des images
  }
  createProduct(productForm) {
    console.log(productForm.value);
    productForm.value.images = 
    
    // const formData = new FormData();
    // formData.append('Article[name]', this.article.name);
    // formData.append('Article[description]', this.article.description);
    // formData.append('Article[price]', this.article.price);
    // formData.append('Article[color]', this.article.color);
    // for (let i = 0; i < this.article.images.length; i++) {
    //   formData.append('articleImage', this.article.images[i]);
    // }
    // this.HttpClient.post('http://localhost:8080/api/articles/create-article', formData)
    // .subscribe(response => {
    //   console.log(response);
    // });
    productForm.resetForm();
  }
  }
  
  

