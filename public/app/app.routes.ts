import { provideRouter, RouterConfig } from '@angular/router';
import { IndexComponent }               from './components/index.component';

// The RouterConfig is an array of routes that describe how to navigate.
// Each route maps a URL path to a component
// There are no leading slashes in our path
export const routes: RouterConfig = [
    { path: '', component: IndexComponent }
];

// To bootstrap our application routes we have to use the provideRouter function
// This function returns a configured Router service provider.
// https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#injector-providers
// We have to export this provider in the APP_ROUTER_PROVIDERS array so we can simplify
// registration of router dependencies later in our main.ts
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
