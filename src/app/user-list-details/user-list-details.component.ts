import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-user-list-details',
  templateUrl: './user-list-details.component.html',
  styleUrls: ['./user-list-details.component.css']
})
export class UserListDetailsComponent implements OnInit {

  constructor(private messageService:MessageserviceService, private router:Router) { }
  ngOnInit(): void {
  }
  @Input() selectedUser;
  @Output() newItemEvent = new EventEmitter<string>();
  changelog:string[]=[];
  public data:any={};
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    for(let name in changes){
      let change=changes[name];
      this.data[name]=change.currentValue;
    }
  }
  update(value:any){
    this.newItemEvent.emit(this.data?.selectedUser);
  }
  sendMessage():void{
    this.messageService.sendMessage(this.data?.selectedUser.first_name);
  }
  clearMessages():void{
    this.messageService.clearMessage();
  }
}
