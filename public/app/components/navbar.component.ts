import { Component, OnInit } from '@angular/core';

// Pages
import { PageService } from '../services/page.service';
import { Page } from '../models/Page';

// Regions
import { RegionService } from '../services/region.service';
import { Region }        from '../models/Region';

@Component({
    selector: 'navbar',
    templateUrl: '/app/templates/navbar.component.html',
    providers: [PageService, RegionService]
})

export class NavbarComponent {
    
    pages: Array<Page>;     // Same as pages: Pages[];
    regions: Array<Region>; // Same as regions: Region[];
    errorMessage: any;

    constructor(private _pageService: PageService,
                private _regionService: RegionService) {
        
    }
    
    ngOnInit() {
        this._pageService.getTitles()
                         .subscribe(
                             pages => this.pages = pages,
                             error => this.errorMessage = <any>error 
                         );
                         
        this._regionService.getRegions()
                           .subscribe(
                               regions => this.regions = regions,
                               error   => this.errorMessage = <any>error
                           )                         
    }
}