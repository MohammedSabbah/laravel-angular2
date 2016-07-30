import { Injectable }    from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import { BaseService }   from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class SettingsService extends BaseService {

    constructor(private _http: Http) {
        super();
    }

    getTerm(term: string) {
        return this._http.get('/api/services/setting/' + term)
                   .map(res => res.json())
                   .catch(this.handleError);
    }

}