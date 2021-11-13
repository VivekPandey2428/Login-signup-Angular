import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-details',
  templateUrl: './user-list-details.component.html',
  styleUrls: ['./user-list-details.component.css']
})
export class UserListDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() usersfirstnamevalue="";
  @Input() userslastnamevalue="";
  Displayed(val,val2){
    val.value=this.usersfirstnamevalue;
    val2.value=this.userslastnamevalue;
  }

}
