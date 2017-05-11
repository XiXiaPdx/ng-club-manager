import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allPeople: People [];
  constructor(private peopleService: ChangePeopleService, private router: Router) { }

  ngOnInit() {
    this.allPeople = this.peopleService.getAllPeople();
  }

  goToDetails(people){
    this.router.navigate(['people', people.name]);
  }

}
