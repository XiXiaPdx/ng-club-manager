import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private peopleService: ChangePeopleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.updatePersonForm = this.fb.group({
      name:['', Validators.compose([Validators.required, this.checkHasLetters])],
  });
  this.updatePersonForm.patchValue({name: this.person.name});

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

  updatePerson(){
    if (this.updatePersonForm.get('name').status === 'VALID'){
      var updatedPerson: People = new People(this.updatePersonForm.value.name);
      this.peopleService.updatePerson(updatedPerson, this.databaseID);
      this.updatePersonForm.reset();
    } else {
      this.updatePersonForm.get('name').markAsDirty();
      this.updatePersonForm.reset();
    }
  }

}
