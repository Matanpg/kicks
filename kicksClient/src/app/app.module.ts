import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';

import { RoutingMainModule } from './routing-main/routing-main.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ProjectsService } from './projects.service';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoHeaderComponent } from './home/info-header/info-header.component';
import { CategoriesNavComponent } from './home/categories-nav/categories-nav.component';
import { LoginComponent } from './login/login.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { UserComponent } from './user/user.component';
import { ProjectsHomeComponent } from './home/categories-nav/projects-home/projects-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoHeaderComponent,
    CategoriesNavComponent,
    LoginComponent,
    StartProjectComponent,
    HomeComponent,
    ProjectComponent,
    ProjectPageComponent,
    UserComponent,
    ProjectsHomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingMainModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxEditorModule
  ],
  providers: [AuthGuard, AuthService, NgbActiveModal, ProjectsService, UsersService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
