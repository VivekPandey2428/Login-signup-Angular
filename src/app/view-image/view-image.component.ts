import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';
import { UserModuleComponent } from '../user-module/user-module.component';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  id:string
  constructor(private httpService:UsersListService,private routes:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.routes.snapshot.paramMap.get('id');
    this.getUserImage();
  }
  ImageList:any;
  getUserImage(){
    this.httpService.getUsers().subscribe((Response:any)=>{
         this.ImageList=Response.data;
    },(error)=>{
      console.log('GetuserImage ',error);
    });
  }

}
