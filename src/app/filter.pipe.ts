import { Pipe, PipeTransform } from '@angular/core';
import {People} from './people.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(students: any [], low, high){
    var output: People []=[];
    for (var i = 0; i < students.length; i++){
      if (students[i].attendance <= parseInt(high) && students[i].attendance >= parseInt(low))
        output.push(students[i]);
      }
    return output;
  }
}
