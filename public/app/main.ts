import { bootstrap }        from '@angular/platform-browser-dynamic';
import { AppComponent }     from './app.component';
import { HTTP_PROVIDERS }   from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS }                   from './app.routes';

import {enableProdMode} from '@angular/core';

enableProdMode();

// We are using the hash strategy because otherwise the Angular 2 Router
// conflicts with our Laravel routes. I haven't had time to find a solution
// to this problem but it should be simple. We only need 1 route in our
// routes.php pointing to / and then do the rest using Angular 2 + API

bootstrap(AppComponent, [HTTP_PROVIDERS,
                         APP_ROUTER_PROVIDERS,
                         { provide: LocationStrategy,
                           useClass: HashLocationStrategy}])
.catch(err => console.log(err));
