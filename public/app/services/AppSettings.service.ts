import { Injectable } from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { BaseService } from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class AppSettingsService extends BaseService {
    
    constructor(private _http: Http) {
        super();
    }
    
    getSettingss() {
        return this._http.get('/api/services/settingss')
                   .map(res => res.json())
                   .catch(this.handleError);
    }
    
    getSettings(id: number) {
        return this._http.get('/api/services/settings/' + id)
                         .map(res => res.json())
                         .catch(this.handleError);
    }
}