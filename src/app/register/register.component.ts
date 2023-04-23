import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  
  user = {
    name:'',
    email:'',
    password:'',
    phone:'',
    adress:''
  }
  image: any;
select(e:any){
  this.image = e.target.files[0];
}

  constructor(private userService: UserService,
    private router: Router){}
  ngOnInit(): void {
    
  }
  
  userRegister(){
    let fd = new FormData()
    fd.append('name', this.user.name)
    fd.append('email', this.user.email)
    fd.append('password', this.user.password)
    fd.append('phone', this.user.phone)
    fd.append('adress', this.user.adress)
    fd.append('image', this.image)

    this.userService.userRegister(fd).subscribe(
      res=>{
        this.router.navigate(['/login'])
      }
    )


  }

}
