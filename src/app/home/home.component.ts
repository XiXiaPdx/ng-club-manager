import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//pipe is running before data arrives...

export class HomeComponent implements OnInit {
allPeople: People[];
high: number=50;
low: number = 50;
  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe((allPeople)=>{
      this.allPeople = allPeople;
    });

  }

  onHighInputChange(event){
   this.high = event.value;
   console.log(this.high);
 }

 onLowInputChange(event){
  this.low = event.value;
  console.log(this.low);
}

  goToDetails(people){
    this.router.navigate(['people', people.name, people.$key]);
  }

}
