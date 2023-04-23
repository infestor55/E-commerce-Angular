import { UserAuthService } from './../services/user-auth.service';
import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user = {
  email: '',
  password: ''
}

  constructor(private userServie: UserService,
    private router: Router) { }
  ngOnInit(): void {

  }
  token:any;
  
  login(){
    this.userServie.userLogin(this.user)
    .subscribe(
      res=>{
      this.token = res
        localStorage.setItem('token', this.token.myToken)
        this.router.navigate(['/home'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
