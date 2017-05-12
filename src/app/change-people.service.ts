import { Injectable } from '@angular/core';
import {People} from './people.model';
import {ALLPEOPLE} from './all-people';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class ChangePeopleService {
  allPeople: FirebaseListObservable <any []>;
  person: FirebaseObjectObservable <any>;
  constructor(private database: AngularFireDatabase) {
    this.allPeople = database.list('allPeople');
  }

  getAllPeople() {
    return this.allPeople;
  }

  getPersonByID(personID){
  this.person = this.database.object('allPeople/'+personID);
  return this.person;
  }

  deletePersonByID (personID){
    var personToDelete = this.getPersonByID(personID);
    personToDelete.remove();
  }

  // getPersonByName(name){
  //   for (var i = 0; i <= ALLPEOPLE.length-1; i++){
  //     if (ALLPEOPLE[i].name === name){
  //       return ALLPEOPLE[i];
  //     }
  //   }
  // }

}
