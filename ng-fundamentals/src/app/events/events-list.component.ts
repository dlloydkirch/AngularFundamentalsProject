import { Component } from '@angular/core'

//decorator that makes this a component
@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
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