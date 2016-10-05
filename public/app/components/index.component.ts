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
    today: any;

    constructor(private _profileService: ProfileService) {

    }

    ngOnInit() {
        this.today = this.getTodayDate();
        console.log(this.getTodayDate());
        this._profileService.getRandomProfiles()
                            .subscribe(
                                thumbnails => this.thumbnails = thumbnails,
                                error     => this.errorMessage = <any>error
                            );
    }
    
    getTodayDate() {
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let weekDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        let d = new Date();
        let day = this.addOrd(d.getDate());
        
        return weekDayNames[d.getDay() - 1] + ", " + day + " of " + monthNames[d.getMonth()];
    }
    
    // adds ordinals to dates (1st, 2nd, 3rd, etc.)
    addOrd(i) {
        if(i == "1" || i == "21" || i == "31") {
            return i + "st";
        }
        if(i == "2" || i == "22") {
            return i + "nd";
        }
        if(i == "3" || i == "23") {
            return i + "rd";
        }
        return i + "th";
    }
}