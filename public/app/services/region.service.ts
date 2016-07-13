import { Injectable } from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { BaseService } from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class RegionService extends BaseService{
    
    constructor(private _http: Http) {
        super();
    }
    
    getRegions() {
        return this._http.get('/api/services/regions')
                   .map(res => res.json())
                   .catch(this.handleError);
    }
}