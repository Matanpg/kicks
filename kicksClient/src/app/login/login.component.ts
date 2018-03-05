import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';
import { Router }  from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string = '';
  private password:string = '';
  private message:string = '';
  private userNameSignup:string = '';
  private emailSignup:string = '';
  private passwordSignup:string = '';
  private firstNameSignup:string = '';
  private lastNameSignup:string = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit() {  }

  loginUser() {
    this.authService.logIn(this.username, this.password)
      .subscribe((answer) => {
        if(answer.ok) {
          this.message = 'ok';
          window.location.reload();
        } else {
          this.message = 'not ok';
        }
      });
  };

  createUser() {
    this.usersService.createUser(
      this.userNameSignup,
      this.emailSignup,
      this.firstNameSignup,
      this.lastNameSignup,
      this.passwordSignup
    )
    .subscribe((answer) => {
      this.loginUserAfterSignUp();
      window.location.reload();
    });
  };

  loginUserAfterSignUp() {
    this.authService.logIn(this.userNameSignup, this.passwordSignup)
      .subscribe(() => {});
  };

  logOut() {
    this.authService.logOut()
      .subscribe(() => {
        this.router.navigate(['/home'])
        .then(
          () => {window.location.reload();}
        )
      });
  }

}
