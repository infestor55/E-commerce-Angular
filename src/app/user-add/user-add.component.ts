import { Component, OnInit } from '@angular/core';
import { UserformService } from '../services/userform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  imagePreview: any;
  constructor(public userformservice: UserformService,
              public router : Router) { }
              ngOnInit(): void {
              }
              onSelectImage(event: any){
                const file = (event.target as HTMLInputElement).files[0]
                console.log(file.type)
                this.userformservice.form.patchValue({
                  image: file,
                });
                const allowedFileType = ['image/png' ,'image/jpg'  ,'image/jpeg'];
if(file && allowedFileType.includes(file.type)){
 const reader = new FileReader()
 reader.onload = () => {
  this.imagePreview = reader.result as string
 }
reader.readAsDataURL(file)
}
  }
  onSubmit(){
    this.userformservice.form.value._id == '' 
      this.userformservice.addUser(this.userformservice.form.value, this.userformservice.form.value.image)
      .subscribe((res: any) => {
        
      })
    }
  
    
  }
  

