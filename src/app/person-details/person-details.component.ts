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
  name: string;
  databaseID: string;
  updatePersonForm: FormGroup;

  constructor(private peopleService: ChangePeopleService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.forEach((urlString)=>{
    this.name = (urlString ['name']);
    this.databaseID = (urlString ['id']);
  });
    this.peopleService.getPersonByID(this.databaseID).subscribe((person)=>{
      this.person = person;
      });
      this.updatePersonForm = this.fb.group({
        name:'',
    });
  }

  deletePerson(personID){
    this.peopleService.deletePersonByID(personID);
  }

  updatePerson(){
    var updatedPerson: People = new People(this.updatePersonForm.value.name);
    this.peopleService.updatePerson(updatedPerson, this.databaseID);
    this.updatePersonForm.reset();
  }

}
