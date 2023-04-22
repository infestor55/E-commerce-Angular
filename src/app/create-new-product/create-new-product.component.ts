
import { ProductService } from './../services/product.service';
import { Form, NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent implements OnInit {
  imagePreview: any;

  constructor(public productService: ProductService,
    public router : Router) { }
  ngOnInit():void {

  }
  onSelectImage(event: any){
    const file = (event.target as HTMLInputElement).files[0]
    console.log(file.type)
    this.productService.article.patchValue({
      articleImage: file,
    });
    const allowedFileType = ['image/png' ,'image/jpg'  ,'image/jpeg'];
    if(file && allowedFileType.includes(file.type)){
      const reader = new FileReader()
      reader.onload = () => {
       this.imagePreview = reader.result as string
       this.productService.article.get('articleImage')?.setValue(this.imagePreview)
       console.log(this.imagePreview)
      }
     reader.readAsDataURL(file)
     }
  }
  onSubmit(){
    
    }

    addproduct(){
      this.productService.article.value
      this.productService.addproduct().subscribe(res=>{
        alert("Product created successfully")
      },
      err=>{
        console.error(err)
        alert("Error creating product");
      }
      )
      
      
    }
  }
  
  

