import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'thumbnail',
    templateUrl: '/app/templates/thumbnail.component.html',
    directives: [ROUTER_DIRECTIVES]
}) 

export class ThumbnailComponent {
    
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