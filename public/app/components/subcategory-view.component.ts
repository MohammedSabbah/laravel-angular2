import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory }        from '../models/Subcategory';

import { ProfileService }     from '../services/profile.service';
import { Thumbnail }          from '../models/Thumbnail';

import { ThumbnailComponent } from '../components/thumbnail.component';

@Component({
    selector: 'subcategory-view',
    templateUrl: '/app/templates/subcategory-view.component.html',
    providers: [SubcategoryService, ProfileService],
    directives: [ROUTER_DIRECTIVES, ThumbnailComponent]
})

export class SubcategoryViewComponent {
    
    subcategoryId: number;
    subcategory: Subcategory;
    errorMessage: any;
    thumbnails: Array<Thumbnail>;
    
    constructor(private _router: ActivatedRoute,
                private _subcategoryService: SubcategoryService,
                private _profileService: ProfileService) {
                    
    }
    
    ngOnInit() {
        this._router.params.subscribe(params => {
            this.subcategoryId = params['id'];
            this._subcategoryService.getSubcategory(this.subcategoryId)
                                    .subscribe(
                                        subcategory => this.subcategory = subcategory,
                                        error       => this.errorMessage = <any>error
                                    );
            this._profileService.getProfilesBySubcategory(this.subcategoryId)
                                .subscribe(
                                    thumbnails => this.thumbnails = thumbnails,
                                    error    => this.errorMessage = <any>error
                                );
        });
    }
    
}