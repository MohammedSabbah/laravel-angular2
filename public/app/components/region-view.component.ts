import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES }    from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { Thumbnail }      from '../models/Thumbnail';

@Component({
    selector: 'region-view',
    templateUrl: '/app/templates/region-view.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfileService]
})

export class RegionViewComponent {
    
    regionId: number = 1;
    thumbnails: Array<Thumbnail> = [];
    errorMessage: any;
    
    constructor(private _route: ActivatedRoute,
                private _profileService: ProfileService) {
        
    }
    
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.regionId = params['id'];
            this._profileService.getProfilesByRegion(this.regionId)
                            .subscribe(
                                thumbnails => this.thumbnails = thumbnails,
                                error      => this.errorMessage = <any>error
                            ); 
        });
    }
}