import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

//source location from github - https://github.com/jmcooper/angular-fundamentals-files

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }
