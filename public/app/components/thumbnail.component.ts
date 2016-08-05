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
}