import { Injectable } from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { BaseService } from './BaseService';

import 'rxjs/Rx';

@Injectable()
export class SubjectService extends BaseService{
    
    constructor(private _http: Http) {
        super();
    }
    
    getTitles() {
        return this._http.get('/api/services/subject-titles')
                         .map(res => res.json())
                         .catch(this.handleError);
    }
    
    getSubject(subjectId: number) {
        return this._http.get('/api/services/subject/' + subjectId)
                         .map(res => res.json())
                         .catch(this.handleError);
    }
}