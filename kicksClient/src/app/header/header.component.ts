import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userData = {};
  private out = true;

  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {
    this.usersService.getUserData().subscribe((data) => {
      this.userData = data;
      if (this.userData != {}) {
        this.out = false
      }
    })
  }

  open() {
      const modalRef = this.modalService.open(LoginComponent);
    }

  logOut() {
    this.authService.logOut()
      .subscribe(() => {
        this.out = true;
        this.router.navigate(['/home'])
        .then(
          () => {window.location.reload();}
        )
      });
  }

  ngOnInit() {
  }

}
