import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { GeoProfileService } from '../services/geoprofile.service';

@Component({
    selector: 'geo-profiles',
    templateUrl: '/app/templates/geo-profiles.component.html',
    providers: [GeoProfileService]
})

export class GeoProfilesComponent {
    
    randomIds: Array<number>;
    geoData: any;
    errorMessage: any;
    
    constructor(private _router: ActivatedRoute,
                private _geoProfileService: GeoProfileService) {
        
    }
    
    ngOnInit() {
        this._router.params.subscribe(params => {
            this._geoProfileService.getGeoProfiles()
                                .subscribe(
                                    geoData => {
                                        this.getRandomNumbers();
                                        this.geoData = geoData;
                                    },
                                    error   => this.errorMessage = <any>error
                                );
        });
    }
    
    /**
     * This function generates an array of 4 numbers. This way we can link
     * to geoprofiles (there are only 24)
     */
    getRandomNumbers() {
        // we have 24 profiles in the geoarea
        let max = 24;
        
        // generate 3 random numbers
        for(let i = 0; i <= 3; i++) {
            let randomNumber = Math.floor(Math.random() * max + 1);
            if(!this.randomIds.indexOf(randomNumber)) {
                this.randomIds.push(randomNumber);
            }
        }
    }
}