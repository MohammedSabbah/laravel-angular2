import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES }    from '@angular/router';

import { ProfileService } from '../services/profile.service';

import { Thumbnail }         from '../models/Thumbnail';
import { ThumbnailComponent} from '../components/thumbnail.component';

import { RegionService }  from '../services/region.service';
import { Region }         from '../models/Region';

import { TruncatePipe }   from '../pipes/truncate';

@Component({
    selector: 'region-view',
    templateUrl: '/app/templates/region-view.component.html',
    directives: [ROUTER_DIRECTIVES, ThumbnailComponent],
    providers: [ProfileService, RegionService],
    pipes: [TruncatePipe]
})

export class RegionViewComponent {
    
    regionId: number = 1;
    thumbnails: Array<Thumbnail> = [];
    errorMessage: any;
    region: Region;
    
    constructor(private _route: ActivatedRoute,
                private _profileService: ProfileService,
                private _regionService: RegionService) {
        
    }
    
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.regionId = params['id'];
            
            // once we have the id from the para, retrieve the region details
            this._regionService.getRegion(this.regionId)
                               .subscribe(
                                   region => this.region = region,
                                   error  => this.errorMessage = <any>error
                               );
            
            // and the profiles in that region
            this._profileService.getProfilesByRegion(this.regionId)
                            .subscribe(
                                thumbnails => this.thumbnails = thumbnails,
                                error      => this.errorMessage = <any>error
                            ); 
        });
    }
}