import {Injectable} from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {BaseService} from './BaseService';
import 'rxjs/Rx';

@Injectable()
export class ProfileService extends BaseService{
    
    constructor(private _http: Http) {
        super();
    }

    getProfiles() {
        return this._http.get('/api/services/profiles')
                         .map(res => res.json())
                         .catch(this.handleError);
    }
}