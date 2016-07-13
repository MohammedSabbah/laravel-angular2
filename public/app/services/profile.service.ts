import {Injectable} from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {BaseService} from './BaseService';
import 'rxjs/Rx';

import { Thumbnail } from '../models/Thumbnail';

@Injectable()
export class ProfileService extends BaseService{
    
    constructor(private _http: Http) {
        super();
    }
    
    /** 
     * Returns the details of a specific profile
     * 
     * @param   number  profileId   The id of the profile to display
     * @return  returns a `Profile`
     */
    getProfile(profileId: number) {
        return this._http.get('/api/services/escort/' + profileId)
                         .map(res => res.json())
                         // .do(data => console.log(data))
                         .catch(this.handleError);
    }
    
    /**
     * Returns all profiles in a specific region
     * 
     * @param   number  regionId    The id of the region to display
     * @return  returns an array of `Thumbnails`
     */
    getProfilesByRegion(regionId: number) {
        return this._http.get('/api/services/escorts-by-region/' + regionId)
                         .map(res => res.json())
                         .catch(this.handleError);
    }
}