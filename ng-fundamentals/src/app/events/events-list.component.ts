import { Component } from '@angular/core'

//decorator that makes this a component
@Component({
    selector: 'events-list',
    template: `
    <div>   
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">
        Log me some foo</button>
        <h3>{{thumbnail.someProperty}}</h3>
    </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/1/2020',
        time: '10:00 am',
        price: 199.99,
        imageUrl: '/assets/images/anngularconnect-shield.png',
        location: {
            address:'1057 DT',
            city: 'London',
            country: 'England'
        }
    }



}