import { Injectable } from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { BaseService } from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class SubcategoryService extends BaseService{
    
    constructor(private _http: Http) {
        super();
    }
    
    getTitles() {
        return this._http.get('/api/services/subcategory-titles')
                         .map(res => res.json())
                         .catch(this.handleError);
    }
    
    getSubcategory(subcategoryId: number) {
        return this._http.get('/api/services/subcategory/' + subcategoryId)
                         .map(res => res.json())
                         // .do(data => console.log(data))
                         .catch(this.handleError);
    }
}