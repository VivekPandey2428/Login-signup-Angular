import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LazyComponent } from './lazy.component';
import { Routes, RouterOutlet, RouterModule } from '@angular/router';


const routes2:Routes=[
  {path:'',component:LazyComponent}
]
@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes2)
  ]
})
export class LazyModule { 
  constructor(){
    console.log('Lazy module Loaded');
  }

}
