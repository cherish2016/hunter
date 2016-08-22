import {RouterConfig} from '@angular/router';

import {HunterComponent} from './hunter.component';
import {HunterTableComponent} from "../hunter.company/hunter.company";
import {HunterConsumeComponent} from "../hunter.consume/hunter.consume";
import {HunterJobComponent} from "../hunter.job/hunter.job";
import {HunterChargeComponent} from "../hunter.charge/hunter.charge";
import {HunterSettingComponent} from "../hunter.setting/hunter.setting";
import {HunterLoginComponent} from "../hunter.login/hunter.login";
import {HunterResignComponent} from "../hunter.resign/hunter.resign";

export const HunterRoutes: RouterConfig = [
  {
    path: '',
    component: HunterComponent
  },
  {
    path: 'companyList',
    component: HunterTableComponent
  },
  {
    path: 'consumeList',
    component: HunterConsumeComponent
  },
  {
    path: 'jobAssign',
    component: HunterJobComponent
  },
  {
    path: 'charge',
    component: HunterChargeComponent
  },
  {
    path: 'setting',
    component: HunterSettingComponent
  },
  {
    path: 'login',
    component: HunterLoginComponent
  },
  {
    path: 'resign',
    component: HunterResignComponent
  }
];
