import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Profile }           from '../models/Profile';

@Component({
    selector: 'profile-view',
    templateUrl: '/app/templates/profile-view.component.html'
})

export class ProfileViewComponent {
    
    profileId: number = 1;
    profile: Profile;
    
    constructor(private _route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        // retrieve profile id
        this._route.params.subscribe(params => {
           this.profileId = params['id']; 
        });
    }
}