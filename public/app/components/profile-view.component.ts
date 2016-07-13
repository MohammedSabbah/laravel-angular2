import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Profile }           from '../models/Profile';
import { ProfileService }    from '../services/profile.service';

@Component({
    selector: 'profile-view',
    templateUrl: '/app/templates/profile-view.component.html',
    providers: [ProfileService]
})

export class ProfileViewComponent {
    
    profileId: number = 1;
    profile: Profile;
    errorMessage: any;
    
    constructor(private _route: ActivatedRoute,
                private _profileService: ProfileService) {
        
    }
    
    ngOnInit() {
        // retrieve profile id
        this._route.params.subscribe(params => {
           this.profileId = params['id']; 
           this._profileService.getProfile(this.profileId)
                               .subscribe(
                                   profile => this.profile = profile,
                                   error   => this.errorMessage = <any>error 
                               );
        });
    }
}