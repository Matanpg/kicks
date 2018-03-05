import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  logIn(username: string, password: string) {
    return this.http.post('http://localhost:8080/login', {username, password}, {withCredentials: true})
                    .map(res => res.json())
                    .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  logOut() {
    return this.http.get('http://localhost:8080/logout', {withCredentials: true})
                    .map(res => res.json())
                    .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  isLogedIn():Observable<boolean> {
    return this.http.get('http://localhost:8080/logedin',{withCredentials: true})
                    .map(res => res.json())
                    .map(json => json.ok)
                    .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

}
