import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit {

  todaysDate:string;
  totalBackKickers = 0;
  fundedProjects = 0;
  liveProjects = 0;

  constructor(
      private projectsService:ProjectsService,
      private usersService:UsersService
    ) {
    this.projectsService.count().subscribe((data) => {this.liveProjects = data});
    this.projectsService.countFunded().subscribe((data) => {this.fundedProjects = data});
    this.usersService.countUsers().subscribe((data) => {this.totalBackKickers = data});
   }

  ngOnInit() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.todaysDate = date;
  }

}
