import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent }   from './components/navbar.component';
import { CarouselComponent } from './components/carousel.component';
import { IndexComponent }    from './components/index.component';
import { FooterComponent }   from './components/footer.component';

import { ProfileViewComponent } from './components/profile-view.component';
import { RegionViewComponent }  from './components/region-view.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  directives: [ NavbarComponent, 
                CarouselComponent, 
                IndexComponent, 
                FooterComponent, 
                ROUTER_DIRECTIVES],
  precompile: [ IndexComponent, 
                ProfileViewComponent, 
                RegionViewComponent]
})

export class AppComponent { }
