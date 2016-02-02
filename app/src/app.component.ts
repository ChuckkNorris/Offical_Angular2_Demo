import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { MovieList } from './PAGES/movie-list/movie-list.component';

@Component({
    moduleId: 'app/src/',
    selector: 'my-app',
    templateUrl: 'app.view.html',
    styleUrls: ['app.style.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/',
        as: 'MovieList',
        useAsDefault: true,
        component: MovieList
    }
])
export class AppComponent {
    
}
