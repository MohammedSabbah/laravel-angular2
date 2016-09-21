import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Thumbnail }        from '../models/Thumbnail';
import { ProfileService }   from '../services/profile.service';

import { ThumbnailComponent } from '../components/thumbnail.component';

import { GeoProfilesComponent} from '../components/geo-profiles.component';

@Component({
    selector: 'index',
    templateUrl: '/app/templates/index.component.html',
    directives: [ROUTER_DIRECTIVES, ThumbnailComponent, GeoProfilesComponent],
    providers: [ProfileService]
})

export class IndexComponent {

    thumbnails: Thumbnail;
    errorMessage: any;

    constructor(private _profileService: ProfileService) {

    }

    ngOnInit() {
        this._profileService.getRandomProfiles()
                            .subscribe(
                                thumbnails => this.thumbnails = thumbnails,
                                error     => this.errorMessage = <any>error
                            );
    }
}