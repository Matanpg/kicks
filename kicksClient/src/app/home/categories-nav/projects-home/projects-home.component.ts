import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../../projects.service';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {

  projects: object[];

  @Input() field = '';
  @Input() status = '';

  constructor(private projectsService:ProjectsService) { 
    this.projectsService.getall().subscribe(data => this.projects = data);
  }

  ngOnInit() {
  }

}
