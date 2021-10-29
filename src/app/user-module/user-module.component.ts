import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css']
})
export class UserModuleComponent implements OnInit {
  title='v1k'
  UserList:any;
  constructor(private httpService:UsersListService) { }

  ngOnInit(){
    this.getUserListData();
  }
  getUserListData(){
    this.httpService.getUsers().subscribe((Response:any)=>{
      console.log('getUserListData',Response);
      this.UserList=Response.data;
    },(error)=>{
      console.log('Userlist:',error);
    });
  }
  CreateUser(){
    let data={
      "id":2,
      "email":"{{this.signupForm.value.email}}",
      "first_name":"{{this.signupForm.value.fname}}",
      "last_name":"{{this.signupForm.value.lname}}",
      "job":"Software Developer"
    }
    this.httpService.CreateUser(data).subscribe((Response)=>{
      console.log('CreateUser',Response);
    },(error)=>{
      console.log('Create User',error);
    });
  }

}
