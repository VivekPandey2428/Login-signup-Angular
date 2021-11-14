import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private baseUrl='https://reqres.in/api/';
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.baseUrl+'users?page=2');
  }
  CreateUser(data:any){
    return this.http.post(this.baseUrl+"users",data);
  }
}
