import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Profile }           from '../models/Profile';
import { ProfileService }    from '../services/profile.service';

import { Region }           from '../models/Region';
import { RegionService }    from '../services/region.service';

import { Settings }         from '../models/Settings';
import { SettingsService }  from '../services/settings.service';

@Component({
    selector: 'profile-view',
    templateUrl: '/app/templates/profile-view.component.html',
    providers: [ProfileService, RegionService, SettingsService]
})

export class ProfileViewComponent {
    
    profileId: number = 1;
    profile: Profile;
    errorMessage: any;
    region: Region;
    terms: string;
    
    constructor(private _route: ActivatedRoute,
                private _profileService: ProfileService,
                private _regionService: RegionService,
                private _settingsService: SettingsService) {
        
    }
    
    ngOnInit() {
        // retrieve profile id
        this._route.params.subscribe(params => {
           this.profileId = params['id']; 
           this._profileService.getProfile(this.profileId)
                               .subscribe(
                                   profile => {
                                       this.profile = profile;
                                       this._regionService.getRegion(parseInt(this.profile.esc_subcats.replace("|", "")))
                                                          .subscribe(
                                                              region => this.region = region,
                                                              error  => this.errorMessage = error);
                                   },
                                   error   => this.errorMessage = <any>error 
                               );
            this._settingsService.getTerm('[smallTerms]')
                                 .subscribe(
                                     terms => this.terms = terms.value,
                                     error => this.errorMessage = <any>error
                                 );
            
        });
    }
}