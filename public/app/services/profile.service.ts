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

    /**
     * Returns all profiles in a specific subcategory
     * 
     * @param   number  subcategoryId    The id of the subcategory to display
     * @return  returns an array of `Thumbnails`
     */
    getProfilesBySubcategory(subcategoryId: number) {
        return this._http.get('/api/services/escorts-by-subcategory/' + subcategoryId)
                         .map(res => res.json())
                         .catch(this.handleError);
    }

    /** 
     * Retrieves a list of random profiles
     * 
     * @param   number  limit       Total number of profiles to display
     * @param   boolean available   If true finds only available profiles
     */
    getRandomProfiles(limit: number = 12, available: boolean = true) {
        return this._http.get('/api/services/escorts-random/' + limit + '/' + available)
                         .map(res => res.json())
                         // .do(data => console.log(data))
                         .catch(this.handleError);
    }
}