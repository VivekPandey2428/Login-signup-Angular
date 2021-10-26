import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders=['Male','Female'];
  AreaOfInterest=['Science','Sports','Arts','Music','Films'];
  signupForm:FormGroup;
  ngOnInit(){
    this.signupForm=new FormGroup({
      'fname':new FormControl('',Validators.required),
      'lname':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required, Validators.minLength(8)]),
      'number':new FormControl('',[Validators.required,Validators.min(1000000000), Validators.max(999999999999)]),
      'Country':new FormControl('',Validators.required),
      'interest':new FormControl([''],Validators.required),
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
      this.signupForm.reset();
    }

}
