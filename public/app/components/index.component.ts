import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Thumbnail }        from '../models/Thumbnail';
import { ProfileService }   from '../services/profile.service';

import { ThumbnailComponent } from '../components/thumbnail.component';

import { GeoProfilesComponent} from '../components/geo-profiles.component';

// clear the cache so that users see always the latest version
import { RuntimeCompiler} from '@angular/compiler';

@Component({
    selector: 'index',
    templateUrl: '/app/templates/index.component.html',
    directives: [ROUTER_DIRECTIVES, ThumbnailComponent, GeoProfilesComponent],
    providers: [ProfileService]
})

export class IndexComponent {

    thumbnails: Thumbnail;
    errorMessage: any;
    today: any;

    constructor(private _profileService: ProfileService,
                private _runtimeCompiler: RuntimeCompiler) {

    }

    ngOnInit() {
        this._runtimeCompiler.clearCache();

        let date = new Date();
        this.today = date.getDate();
        
        this._profileService.getRandomProfiles()
                            .subscribe(
                                thumbnails => this.thumbnails = thumbnails,
                                error     => this.errorMessage = <any>error
                            );
    }

    getDate() {
        let monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

        let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let d = new Date();
        let date = dayNames[d.getUTCDay()] + " " + d.getDate().toString() + " of " + monthNames[d.getMonth()];
        return date;
    }
}