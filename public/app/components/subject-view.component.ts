import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { SubjectService } from '../services/subject.service';
import { Subject }        from '../models/Subject';  

@Component({
    selector: 'subject-view',
    templateUrl: '/app/templates/subject-view.component.html',
    providers: [SubjectService]
})

export class SubjectViewComponent {
    
    subject: Subject;
    subjectId: number = 1;
    errorMessage: any;
    
    constructor(private _router: ActivatedRoute,
                private _subjectService: SubjectService) {
        
    }
    
    ngOnInit() {
        this._router.params.subscribe(params => {
            this.subjectId = params['id']; 
            this._subjectService.getSubject(this.subjectId)
                                .subscribe(
                                    subject => this.subject = subject,
                                    error   => this.errorMessage = <any>error
                                )
        });
    }
}