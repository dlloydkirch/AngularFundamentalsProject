import { Component} from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl:'create-event.component.html',
    styles:[`
    em {float:right; color#E05c65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})

export class CreateEventComponet{

    newEvent
    isDirty:boolean = true
    constructor (private router:Router){

    }

    saveEvent(formValues){
        console.log(formValues)
    }
    cancel(){
        this.router.navigate(['/events'])
    }
}