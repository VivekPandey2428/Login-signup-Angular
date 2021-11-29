import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations:[
    trigger('app-homepage',[
      state('open',style({
        
      }))
    ])
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
