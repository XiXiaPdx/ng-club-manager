import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {ChangePeopleService} from '../change-people.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  newPersonForm: FormGroup;
  newPerson: People;

constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.newPersonForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, this.checkHasLetters])],
      attendance: ['', Validators.required]
    });
  }

  checkHasLetters(formField: FormControl){
    if (formField.value !== null){
     return /^\S*$/.test(formField.value) ? null : { notA: true };
      }
    }

  nameFieldWarning (){
    if( this.newPersonForm.get('name').status !== 'VALID' && this.newPersonForm.get('name').dirty){
      return 'error';
    }
  }

  addPerson(){
    if (this.newPersonForm.get('name').status === 'VALID'){
    this.newPerson = this.newPersonForm.value;
    this.peopleService.addPerson(this.newPerson);
    this.newPersonForm.reset();
  } else {
    this.newPersonForm.get('name').markAsDirty();
    this.nameFieldWarning();
  }
  }

}
