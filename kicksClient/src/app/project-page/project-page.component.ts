import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { ProjectsService } from '../projects.service';
import { RoutingMainModule } from '../routing-main/routing-main.module';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  project = {
    id: 0,
    name: '',
    field: '',
    description: '',
    fundingTarget: 0,
    picture_big: ''
  };

  id = 0;
  a:any;

  model = {
    fundingFromUser: 0
  };

  constructor(
      private projectsService:ProjectsService,
      private route: ActivatedRoute,
      private router: Router
    ) { 
      this.a = this.route.params;
      this.id = this.a._value.projid;
      this.projectsService.getProj(this.id).subscribe(data => this.project = data);
  }

  ngOnInit() {
    // this.assignPicBig();
  }

  onSubmit() { 
    this.projectsService.fundProj(this.id, this.model)
    .subscribe(()=>{
      window.location.reload();
    });
    
   }

   assignPicBig() {
     let pic = (<HTMLInputElement>document.getElementById('picBig'));
     pic.src = this.project.picture_big;
   }

}
