import {Response}   from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class BaseService {
    protected handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}