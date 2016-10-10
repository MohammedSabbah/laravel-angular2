import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'thumbnail',
    templateUrl: '/app/templates/thumbnail.component.html',
    directives: [ROUTER_DIRECTIVES]
}) 

export class ThumbnailComponent {
    
    // Instead of defining a list of inputs here we can add an 'input'
    // property to our decorator:
    //
    // @Component({ inputs: ['idProfile', 'available'...]})
    //
    // We can also define a custom name:
    // 
    // @Input('customName') name: string;
    //  or
    // @Component({ inputs: ['name:customName'] })
    //
    // And in the parent controller we have to do:
    //
    // <thumbnail [customName]="value"></thumbnail>
    
    @Input() idProfile: number;
    @Input() available: string;
    @Input() image: string;
    @Input() profileName: string;
    @Input() profileAge: string;
    
    constructor() {
        
    }
    
    ngOnInit() {
        
    }
    
    /*
     * I tried disabling link in Angular2 using a couple of techniches but I haven't
     * managed. What I'm doing here is to show 2 different elements using *ngIf
     * 
     * If the profile is available show link and picture
     * If the profile is not available show only picture
     * 
     */
    isDisabled(status) {
        return status == 'available' ? true : false;
    }
}