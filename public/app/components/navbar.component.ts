import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES}   from '@angular/router';

// Pages
import { PageService } from '../services/page.service';
import { Page } from '../models/Page';

// Regions
import { RegionService } from '../services/region.service';
import { Region }        from '../models/Region';

// Subjects
import { SubjectService } from '../services/subject.service';
import { Subject }       from '../models/Subject';

// Subcategories
import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory }        from '../models/Subcategory';

@Component({
    selector: 'navbar',
    templateUrl: '/app/templates/navbar.component.html',
    providers: [
        PageService, 
        RegionService, 
        SubjectService, 
        SubcategoryService],
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    
    pages: Array<Page>;     // Same as pages: Pages[];
    regions: Array<Region>; // Same as regions: Region[];
    subjects: Array<Subject>; // Same as subjects: Subjects[];
    subcategories: Array<Subcategory>; // Same as subcategory: Subcategory[];
    errorMessage: any;

    constructor(private _pageService: PageService,
                private _regionService: RegionService,
                private _subjectService: SubjectService,
                private _subcategoryService: SubcategoryService) {
        
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
                           );
                           
        this._subjectService.getTitles()
                            .subscribe(
                                subjects => this.subjects = subjects,
                                error    => this.errorMessage = <any>error
                            );
                            
        this._subcategoryService.getTitles()
                                .subscribe(
                                    subcategories => this.subcategories = subcategories,
                                    error         => this.errorMessage = <any>error 
                                );                         
    }
}