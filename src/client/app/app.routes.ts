import { provideRouter, RouterConfig } from '@angular/router';

import {HunterRoutes} from "./hunter/hunter.routes";

const routes: RouterConfig = [
  ...HunterRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
