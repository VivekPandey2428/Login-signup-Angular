import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

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

  changelog:string[]=[];
  public data:any={};
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    for(let name in changes){
      let change=changes[name];
      this.data[name]=change.currentValue;
    }
  }
  update(fname,lname,email){
    this.selectedUser.first_name=fname.value;
    this.selectedUser.last_name=lname.value;
    this.selectedUser.email=email.value;
  }

}
