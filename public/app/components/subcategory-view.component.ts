import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory }        from '../models/Subcategory';

@Component({
    selector: 'subcategory-view',
    templateUrl: '/app/templates/subcategory-view.component.html',
    providers: [SubcategoryService]
})

export class SubcategoryViewComponent {
    
    subcategoryId: number = 1;
    subcategory: Subcategory;
    errorMessage: any;
    
    constructor(private _router: ActivatedRoute,
                private _subcategoryService: SubcategoryService) {
                    
    }
    
    ngOnInit() {
        this._router.params.subscribe(params => {
            this.subcategoryId = params['id'];
            this._subcategoryService.getSubcategory(this.subcategoryId)
                                    .subscribe(
                                        subcategory => this.subcategory = subcategory,
                                        error       => this.errorMessage = <any>error
                                    ) 
        });
    }
    
}