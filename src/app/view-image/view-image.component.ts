import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';
import { UserModuleComponent } from '../user-module/user-module.component';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  id:string;
  messages:any[]=[];
  subscription:Subscription;
  
  constructor(private httpService:UsersListService,private routes:ActivatedRoute,private messageService:MessageserviceService) {
    this.subscription=this.messageService.getMessage().subscribe(message=>{
      if(message){
        this.messages.push(message);
      }
      else{
        this.messages=[];
      }
    })
   }
  ngOnInit(): void {
    this.id=this.routes.snapshot.paramMap.get('id');
    this.getUserImage();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
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
