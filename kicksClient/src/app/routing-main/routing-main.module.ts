import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

import { HomeComponent } from '../home/home.component';
import { StartProjectComponent } from '../start-project/start-project.component';
import { ProjectComponent } from '../project/project.component';
import { ProjectPageComponent } from '../project-page/project-page.component';
import { UserComponent } from '../user/user.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project/:projid', component: ProjectPageComponent },
  { path: 'startProject', component: StartProjectComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  // { path: '', component:  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingMainModule { }
