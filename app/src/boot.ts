import { bootstrap } from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {RestService} from './SERVICES/rest.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, RestService, HTTP_PROVIDERS]);