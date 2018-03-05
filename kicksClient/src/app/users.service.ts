import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getall() {
    return this.http.get('http://localhost:8080/users').map(res=>res.json());
  }

  getUserProjects() {
    return this.http.get('http://localhost:8080/projects/user', {withCredentials: true}).map(res=>res.json());
  }

  getUserData() {
    return this.http.get('http://localhost:8080/user', {withCredentials: true}).map(res=>res.json());
  }

  countUsers() {
    return this.http.get('http://localhost:8080/countusers').map(res=>res.json());
  }

  createUser(
    inputFirstName,
    inputLastName,
    inputUserName,
    inputEmail,
    inputPassword
  ) {
    const newUser = {
      firstName: inputFirstName,
      lastName: inputLastName,
      userName: inputUserName,
      email: inputEmail,
      password: inputPassword
    };
    return this.http.post('http://localhost:8080/createUser', newUser);
  }
}
