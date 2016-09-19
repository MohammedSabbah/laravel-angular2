import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class GeoProfileService extends BaseService {
    
    constructor(private _http: Http) {
        super();
    }
    
    getGeoProfiles() {
        return this._http.get('/api/services/geo-profiles')
                         .map(res => res.json())
                         .catch(this.handleError);
    }
}