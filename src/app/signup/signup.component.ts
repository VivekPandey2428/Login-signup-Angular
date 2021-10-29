import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, NgForm, NgModel, Validators,FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserModuleComponent } from '../user-module/user-module.component';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders=['Male','Female'];
  signupForm:FormGroup;
  constructor(private httpService:UsersListService) { }
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
      console.log(this.signupForm.value.fname);
      console.log(this.signupForm.value.lname);
      console.log(this.signupForm.value.email);
      console.log(this.signupForm.value.password);
      console.log(this.signupForm.value.number);
      console.log(this.signupForm.value.Country);
      console.log(this.signupForm.value.gender);
      console.log(this.signupForm.value);
      this.signupForm.reset();
    }
    CreateUser(){
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
        console.log('CreateUser',Response);
      },(error)=>{
        console.log('Create User',error);
      });
    }
    
}
