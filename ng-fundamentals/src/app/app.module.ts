import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

import{
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponet,
  EventsListResolver,
  EventRouteActivator
}from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


//source location from github - https://github.com/jmcooper/angular-fundamentals-files

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponet,
    Error404Component
  ],

  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    },
    
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { 
  
}

export function checkDirtyState(component:CreateEventComponet){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you want to cancel?');
  return true;
  }
}