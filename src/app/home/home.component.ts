import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// function notblank(ac: AbstractControl){
//   console.log(ac.get('name').touched);
//   return ac.get('name').value !==''  ? null : {'notblank': true};
//
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
allPeople: People [];
newPersonForm: FormGroup;
isblank: boolean = true;
  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.peopleService.getAllPeople().subscribe((allPeople)=>{
      this.allPeople = allPeople;
    });
    this.newPersonForm = this.fb.group({
      name: ['', Validators.required],

    }, {validator: this.notblank});
    // this.newPersonForm.patchValue({
    //   name: 'haha',
    // })
  }

notblank(ac: AbstractControl){
    console.log(ac.get('name').dirty);
      if (ac.get('name').dirty){
        return ac.get('name').value !==''? null : {'isblank': true};
      }
  }


  addPerson(){
    if (this.notblank === null){
    var newPerson: People = new People(this.newPersonForm.value.name);
    this.peopleService.addPerson(newPerson);
    this.newPersonForm.reset();
  } else {
    console.log("Please enter a name");
  }
  }

  goToDetails(people){
    this.router.navigate(['people', people.name, people.$key]);
  }

}
