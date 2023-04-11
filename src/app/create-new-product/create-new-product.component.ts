import { FileHandle } from './../model/file-handel.model';
import { ProductService } from './../services/product.service';
import { Form, NgForm } from '@angular/forms';
import { product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent implements OnInit {
  product: product = {
    name: "",
    description: "",
    price: 0,
    color: "",
    image:[]
  }
  constructor(private ProductService:ProductService,
              private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    
  }
  addProduct(productForm: NgForm){
    const productFormData = this.prepareFormData(this.product);
this.ProductService.addProduct(productFormData).subscribe(
  (res: product) => {
    productForm.reset();
  },
  (error : HttpErrorResponse) => {
    console.log(error);
  }
);
  }
  prepareFormData(product: product) : FormData {
    const formData = new FormData();
    formData.append(
      'Article',
      new Blob([JSON.stringify(product)], {type: 'application/json'})
    );
    for(var i = 0; i < product.image.length; i++){
      formData.append(
        'articleImage',
        product.image[i].file,
        product.image[i].file.name
      );
    }
    return formData;
  }
  onFileSelected(event) {
    if(event.target.files){
      const file = event.target.files[0]

      const filehandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.product.image.push(filehandle)
    }
  }
}

