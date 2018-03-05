import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  projects: object[];

  constructor(private projectsService:ProjectsService) { 
    this.projectsService.getall().subscribe(data => this.projects = data);
  }

  

  ngOnInit() {
  }

}
