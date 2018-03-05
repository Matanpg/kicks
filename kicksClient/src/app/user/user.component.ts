import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userData = {};
  private userProjects;

  constructor(private usersService: UsersService) {
    this.usersService.getUserData().subscribe(data => this.userData = data);
    this.usersService.getUserProjects().subscribe(data => this.userProjects = data);
  }

  ngOnInit() {
  }

}
