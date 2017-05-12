import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allPeople: People [];
newPersonForm: FormGroup;
  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe((allPeople)=>{
      this.allPeople = allPeople;
    });
    this.newPersonForm = this.fb.group({
      name:'',
    });
  }

  addPerson(){
    var newPerson: People = new People(this.newPersonForm.value.name);
    this.peopleService.addPerson(newPerson);
    this.newPersonForm.reset();
  }

  goToDetails(people){
    this.router.navigate(['people', people.name, people.$key]);
  }

}
