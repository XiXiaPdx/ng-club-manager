import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatePersonForm: FormGroup;
  @Input () databaseID: string;
  @Input () person: People;
  @Output () personSent = new EventEmitter();
  events: object []=[];
  updatedPerson: People;

  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  this.peopleService.getPersonByID(this.databaseID).subscribe((person)=>{
    this.person = person;
    this.updatePersonForm.patchValue({name: this.person.name});
    });
    this.updatePersonForm = this.fb.group({
      name:['', Validators.compose([Validators.required, this.checkHasLetters])],
  });
  this.subcribeToUpdateFormChanges()
  }

  checkHasLetters(formField: FormControl){
    if (formField.value !== null){
     return /^\S*$/.test(formField.value) ? null : { notA: true };
      }
    }

  nameFieldWarning (){
    if( this.updatePersonForm.get('name').status !== 'VALID' && this.updatePersonForm.get('name').dirty){
      return 'error';
    }
  }

  subcribeToUpdateFormChanges() {
    // initialize stream
    const updateFormValueChanges$ = this.updatePersonForm.valueChanges;
    // subscribe to the stream
    updateFormValueChanges$.subscribe((x) =>{
      this.events.push({ event: 'STATUS CHANGED', object: x })
      this.personSent.emit(x);
    })
  }


  updatePerson(){
    if (this.updatePersonForm.get('name').status === 'VALID'){
      this.updatedPerson=this.updatePersonForm.value;
      this.peopleService.updatePerson(this.updatedPerson, this.databaseID);
      this.updatePersonForm.reset();
    } else {
      this.updatePersonForm.get('name').markAsDirty();
      this.updatePersonForm.reset();
    }
  }

}
