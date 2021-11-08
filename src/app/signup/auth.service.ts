import { Injectable } from "@angular/core";
import { Iuser } from "./signup.model";
@Injectable()
export class AuthService{
    currentuser:Iuser;
    signUpUser(email:string,password:string){
        this.currentuser={
            id:1,
            email:"vivekroxstar9@gmail.com",
            firstname:"Vivek",
            lastname:"Pandey"
        }
    }
    isAuthenticated(){
        return !!this.currentuser;
    }
}