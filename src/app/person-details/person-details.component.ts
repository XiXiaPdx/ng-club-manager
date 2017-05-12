import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {ChangePeopleService} from '../change-people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: People;
  name: string;
  databaseID: string;
  constructor(private peopleService: ChangePeopleService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlString)=>{
    this.name = (urlString ['name']);
    this.databaseID = (urlString ['id']);
  });
    this.peopleService.getPersonByID(this.databaseID).subscribe((person)=>{
      this.person = person;
    });
  }

}
