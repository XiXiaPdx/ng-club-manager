import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import {masterFirebaseConfig} from './api-keys';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ChangePeopleService} from './change-people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { AddNewComponent } from './add-new/add-new.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PersonDetailsComponent,
    AddNewComponent
  ],
  imports: [
    CovalentCoreModule,
BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ChangePeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
