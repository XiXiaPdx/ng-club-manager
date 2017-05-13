import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {ChangePeopleService} from '../change-people.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: People;
  databaseID: string;

  constructor(private peopleService: ChangePeopleService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.forEach((urlString)=>{
    this.databaseID = (urlString ['id']);
  });
    this.peopleService.getPersonByID(this.databaseID).subscribe((person)=>{
      this.person = person;
      });
  }

  deletePerson(personID){
    this.peopleService.deletePersonByID(personID);
  }

  updateDetailDisplay(person){
    this.person = person;
  }

}
