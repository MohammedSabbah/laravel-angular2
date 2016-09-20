import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Settings }         from '../models/Settings';
import { SettingsService }  from '../services/settings.service';

import { DomSanitizationService } from '@angular/platform-browser';

@Component({
    selector: 'geo-profile-view',
    templateUrl: '/app/templates/geo-view.component.html',
    providers: [SettingsService]
})

export class GeoProfileViewComponent {
    
    // we are going to use the profileId to pick a profile from our array of
    // profiles.
    profileId: number;
    geoProfiles: Array<string> = ["hornyval", "oldyapril", "sexycharlotte", "hotdahlia", "sexygrace", "hornyhelena", "hornyhope", "sexyjane", "hotjanet", "janexxx", "juicyjenny", "juicyjess", "hornyjill", "naughtykatie", "sexylinda", "hotmari", "hotmarie", "hornymeg", "hotnanette", "racyrobbi", "sexysam", "sexyshell", "naughtyshirley", "saucysophie", "tastytan"];
    
    shortcode: number = 69920;
    
    terms: string;
    errorMessage: any;
    sanitizedUrl: any;
    sanitizedUrlNumber: any;
    
    constructor(private _router: ActivatedRoute,
                private _settingsService: SettingsService,
                private _sanitizer: DomSanitizationService) {
        
    }
    
    ngOnInit() {
        this._router.params.subscribe(params => {
             this.profileId = params['id'];
             // generate contact button: we have to use the DomSanitizationService to skip sanitazion before
            // adding the HTML to our view, otherwise the sms:// link won't work
            let contactButtonHtml = '<a href="sms://' + this.shortcode + '">' +
                                        '<button type="button" class="btn btn-primary button-send-text">Contact her right now!</button>' +                            
                                    '</a>';
                                    
            // make phone number clicable on mobile devices
            let contactNumberHtml = '<a href="sms://' + this.shortcode + '">' +
                                        '<h2 align="center">' + this.shortcode + '</h1>' +                            
                                    '</a>';
                                    
            this.sanitizedUrl = this._sanitizer.bypassSecurityTrustHtml(contactButtonHtml);
            this.sanitizedUrlNumber = this._sanitizer.bypassSecurityTrustHtml(contactNumberHtml);
            
             
             this._settingsService.getTerm('[smallTerms]')
                                 .subscribe(
                                     terms => this.terms = terms.value,
                                     error => this.errorMessage = <any>error
                                 );
        });
    }
}