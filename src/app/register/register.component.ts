import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  constructor(public userService: UserService){}
  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        
        this.resetForm(form)
      },
      err => {
        if ( err.status == 500) {
          this.serverErrorMessages = err.error.join('<br/>')
        }
        else 
          this.serverErrorMessages = 'Something weent wrong Please contact Admin!';
      
      }
    )
  }
  resetForm(form:NgForm){
    this.userService.selectedUser={
    name:'',
    email:'',
    password:'',
    phone:'',
    adress:''
    }
    form.resetForm()
    this.serverErrorMessages = '';
  }
  

}
