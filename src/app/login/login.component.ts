import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder,FormControl, NgForm, NgModel, Validators,FormArray} from '@angular/forms';
import { AuthService } from '../authorize.service';
import { AuthGuard } from '../auth.guard';
import { HttpClientModule } from  '@angular/common/http';
import { UsersListService } from '../users-list.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any='';
  password:any='';
  loginForm:FormGroup;
  constructor(private toastr:ToastrService,public authService:AuthService,private router:Router,private authguard:AuthGuard,private http:HttpClientModule,private users:UsersListService) { }

  ngOnInit(){
    this.loginForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required, Validators.minLength(4)]),  
    });
  }
  login(){
    if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this.users.LoginUserData(this.loginForm.value).subscribe(res  => {
    console.log(res);
    localStorage.setItem('token',res.token);
    this.toastr.success("Login Successful Redirected to Users");
    this.router.navigate(['user-module']);
   },
    error => console.log(error)
    )
  }
    
  }
  }
