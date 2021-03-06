import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
    EventsListResolver,
    EventRouteActivator,
    CreateEventComponet,
    EventDetailsComponent,
    EventsListComponent
} from './events/index'

export const appRoutes:Routes = [ 
    { path : 'events/new', component: CreateEventComponet, canDeactivate: ['canDeactivateCreateEvent']},
    { path : 'events', component: EventsListComponent, resolve: {events:EventsListResolver}},
    
    { path : 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path : 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)},

    { path : '404', component: Error404Component},
    { path : '', redirectTo: '/events', pathMatch: 'full'}
]