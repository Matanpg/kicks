import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { ProjectsService } from '../projects.service';
import { resolve } from 'url';
import { reject } from 'q';
// import { Body } from '@angular/http';

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.css']
})
export class StartProjectComponent implements OnInit {

  fields = ['Design & Tech', 'Music', 'Publishing', 'Film', 'Food & Craft', 'Games', 'Arts', 'Comics & Illustration'];

  idCreated = 0;

  constructor(private projectsService:ProjectsService, private router: Router) { 
    
    
  }

  model = {
    id: 0,
    name: '',
    field: '',
    description: '',
    fundingTarget: 0,
    picture_big: ''
  };

  submitted = false;

  onSubmit() {
    let getBase64 = new Promise((resolve, reject) => {
      let element = (<HTMLInputElement>document.getElementById('picture_big'));
      
      if (!element) {reject('rejected-no pic')} else {
        let files = element.files;
        let file = files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
      }
    });
    
      getBase64.then(data => {
      this.model.picture_big = JSON.stringify(data);
        })
        .then(()=> {
          this.projectsService.createProject(
          this.model.name,
          this.model.field,
          this.model.description,
          this.model.fundingTarget,
          this.model.picture_big
          ).subscribe((aa) => {
            this.idCreated = aa.json().id
            console.log(aa.json().id);
            })
          })
        .then(() => {
            this.submitted = true;
            console.log(this.idCreated);
          })
        .catch((msg) => {
            console.log(msg);
          })
      }

   navToNewProj(id) {
    this.router.navigate(['/project',id]);
   }

  ngOnInit() {
    let files = (<HTMLInputElement>document.getElementById('picture_big')).files;
    console.log(files);
  }
  
  // getBase64 = new Promise((resolve, reject) => {
  //   let element = (<HTMLInputElement>document.getElementById('picture_big'));
  //   console.log(element);
    
  //   if (!element) {reject('rejected-no pic')} else {
  //     let files = element.files;
  //     let file = files[0];
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       console.log(reader.result);
  //       resolve(reader.result);
  //     };
  //   }
  // })

}
