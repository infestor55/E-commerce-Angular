import { UserAuthService } from './../services/user-auth.service';
import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userServie: UserService, private UserAuthService:UserAuthService) { }
  ngOnInit(): void {

  }
  login(loginForm:NgForm){
    this.userServie.login(loginForm.value).subscribe(
      (res)=>{
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
