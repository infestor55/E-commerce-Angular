import { product } from './../model/product.model';

import { ProductService } from './../services/product.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent implements OnInit {
  
  product = {
    name:'',
    description:'',
    price:'',
    color:'',
    idOwner:'',
    idCategory:''
  }
  image: any;
  select(e:any){
    this.image = e.target.files[0];
  }
  constructor(public productService: ProductService,
    public router : Router) { }

  ngOnInit():void {

  }
  addProduct(){
    let fd = new FormData()
    fd.append('name', this.product.name)
    fd.append('description', this.product.description)
    fd.append('price', this.product.price)
    fd.append('color', this.product.color)
    fd.append('idOwner', this.product.idOwner)
    fd.append('idCategory', this.product.idCategory)
    fd.append('image', this.image)

    this.productService.addproduct(fd).subscribe(
      res=>{
        this.router.navigate(['/home'])
      }
    )


  }
  }
  
  

