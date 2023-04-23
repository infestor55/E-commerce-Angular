import { Router } from '@angular/router';
import { AuthorAuthService } from './../services/author-auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-register',
  templateUrl: './author-register.component.html',
  styleUrls: ['./author-register.component.css']
})
export class AuthorRegisterComponent implements OnInit{

author = {
  name:'',
  lastname:'',
  email:'',
  password:'',
  about:''
}
image: any;
select(e:any){
  this.image = e.target.files[0];
}

constructor(private authorservice: AuthorAuthService,
            private router: Router){}

  ngOnInit(): void {
    
  }

  register(){
    let fd = new FormData()
    fd.append('name', this.author.name)
    fd.append('lastname', this.author.lastname)
    fd.append('email', this.author.email)
    fd.append('password', this.author.password)
    fd.append('about', this.author.about)
    fd.append('image', this.image)

    this.authorservice.register(fd).subscribe(
      res=>{
        this.router.navigate(['/login'])
      }
    )


  }
}
