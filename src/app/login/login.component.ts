import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder,FormControl, NgForm, NgModel, Validators,FormArray} from '@angular/forms';
import { AuthService } from '../authorize.service';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  pwd='';
  loginForm:FormGroup;
  constructor(public authService:AuthService,private router:Router,private authguard:AuthGuard) { }

  ngOnInit(){
    this.loginForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'pwd':new FormControl('',[Validators.required, Validators.minLength(8)]),  
    });
  }
  tempemail="vivekroxstar9@gmail.com";
  temppassword="vp@1234";
  login(){
    localStorage.setItem('token',"QpwL5tke4Pnpja7X4");
    localStorage.setItem('email',this.tempemail);
    localStorage.setItem('pwd',this.temppassword);
    console.log(this.authService.IsLoggedIn()); 
    console.log(this.authguard.canActivate());
  }
}
