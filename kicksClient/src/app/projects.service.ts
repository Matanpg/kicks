import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getall() {
    return this.http.get('http://localhost:8080/projects').map(res=>res.json());
  }

  count() {
    return this.http.get('http://localhost:8080/countprojects').map(res=>res.json());
  }

  countFunded() {
    return this.http.get('http://localhost:8080/countfundedprojects').map(res=>res.json());
  }

  getProj(id) {
    return this.http.get('http://localhost:8080/project/'+id).map(res=>res.json());
  }

  createProject(inputName, inputField, inputDescription, inputFundingTarget, inputPicBig) {
    const newProject = {
      name: inputName,
      field: inputField,
      description: inputDescription,
      fundingTarget: inputFundingTarget,
      picBig: inputPicBig
    };
    return this.http.post('http://localhost:8080/startProject', newProject, {withCredentials: true});
  }

  fundProj(id, fundingFromUser) {
    let j = {"fundingFromUser": fundingFromUser.fundingFromUser}
    return this.http.put('http://localhost:8080/project/'+id, j);
  }

}
