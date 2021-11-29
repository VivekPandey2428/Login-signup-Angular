import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder,FormControl, NgForm, NgModel, Validators,FormArray} from '@angular/forms';
import { AuthService } from '../authorize.service';
import { AuthGuard } from '../auth.guard';
import { HttpClientModule } from  '@angular/common/http';
import { UsersListService } from '../users-list.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any='';
  pwd:any='';
  loginForm:FormGroup;
  loginData:any = {
     "email":"eve.holt@reqres.in",
     "password":"pistol"
  };
  constructor(public authService:AuthService,private router:Router,private authguard:AuthGuard,private http:HttpClientModule,private users:UsersListService) { }

  ngOnInit(){
    this.loginForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'pwd':new FormControl('',[Validators.required, Validators.minLength(8)]),  
    });
  }
  login(){
    console.log(this.loginData);
    this.users.LoginUserData(this.loginData).subscribe(res  => {
    console.log(res)
    localStorage.setItem('token',"QpwL5tke4Pnpja7X4")
    this.router.navigate(['user-module'])
   },
    error => console.log(error)
    )
    
  }
  }
