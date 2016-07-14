import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { PageService } from '../services/page.service'; 
import { Page }        from '../models/Page';

@Component({
    selector: 'page-view',
    templateUrl: '/app/templates/page-view.component.html',
    providers: [PageService]
})

export class PageView {
    
    pageId: number = 1;
    page: Page;
    errorMessage: any;
    
    constructor(private _route: ActivatedRoute,
                private _pageService: PageService) {
        
    }
    
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.pageId = params['id']; 
            this._pageService.getPage(this.pageId)
                             .subscribe(
                                 page  => this.page = page,
                                 error => this.errorMessage = <any>error
                             )
        });
    }
}