import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, NgForm, NgModel, Validators,FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsersListService } from '../users-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders=['Male','Female'];
  signupForm:FormGroup;
  constructor(private httpService:UsersListService,private router:ActivatedRoute,private route:Router,private authService:AuthService) {

   }
  ngOnInit(){
    this.signupForm=new FormGroup({
      'fname':new FormControl('',Validators.required),
      'lname':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required, Validators.minLength(8)]),
      'number':new FormControl('',[Validators.required,Validators.min(1000000000), Validators.max(999999999999)]),
      'Country':new FormControl('',Validators.required),
      'gender':new FormControl('',Validators.required),  
    });
  };
    onSubmit(){
      if(this.signupForm.valid){
      let data={
        "id": 2,
        "email":this.signupForm.value.email,
        "first_name":this.signupForm.value.fname,
        "last_name":this.signupForm.value.lname,
        "number":this.signupForm.value.number,
        "job":"Software Developer",
        "gender":this.signupForm.value.gender,
        "country":this.signupForm.value.Country
      }
      this.httpService.CreateUser(data).subscribe((Response)=>{
        this.route.navigate(['login']);
        console.log('CreateUser',Response);
      },(error)=>{
        console.log('Create User',error);
      });
    }
  }
    
}
