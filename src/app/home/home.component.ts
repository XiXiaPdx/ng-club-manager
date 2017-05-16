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
highEnd: number=75;
lowEnd: number = 25;
  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe((allPeople)=>{
      this.allPeople = allPeople;
    });

  }

  onHighInputChange(event){
    if(this.highEnd <= this.lowEnd){
      this.highEnd = this.lowEnd+1;
    } else{
   this.highEnd = event;
 }
 }

 onLowInputChange(event){
   if (event >= this.highEnd){
     this.lowEnd = this.highEnd-1;
   } else {
  this.lowEnd = event;
}
}

  goToDetails(people){
    this.router.navigate(['people', people.name, people.$key]);
  }

}
