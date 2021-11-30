import { Pipe, PipeTransform } from '@angular/core';
import {UserModuleComponent} from './user-module.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value:any[], searchText:string){
    if(value.length===0||searchText===''){
      return value;
    }
    searchText=searchText.toLocaleLowerCase();
    const users=[];
    for(const user of value){
      if(user['first_name'].toString().toLocaleLowerCase().includes(searchText)){
        users.push(user);
      }
    }
    console.log('users',users);
    return users;
  }

}
