import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-details',
  templateUrl: './user-list-details.component.html',
  styleUrls: ['./user-list-details.component.css']
})
export class UserListDetailsComponent implements OnInit {

  constructor() { }
  
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
}
