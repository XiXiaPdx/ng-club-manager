import { Injectable } from '@angular/core';
import {People} from './people.model';
import {ALLPEOPLE} from './all-people';


@Injectable()
export class ChangePeopleService {
  constructor() { }

  getAllPeople() {
    return ALLPEOPLE;
  }

  getPersonByName(name){
    for (var i = 0; i <= ALLPEOPLE.length-1; i++){
      if (ALLPEOPLE[i].name === name){
        return ALLPEOPLE[i];
      }
    }
  }

}
