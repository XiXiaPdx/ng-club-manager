import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ChangePeopleService} from './change-people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PersonDetailsComponent
  ],
  imports: [
    CovalentCoreModule,
BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [ChangePeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
