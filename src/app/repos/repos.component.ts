import { Component, OnInit } from '@angular/core';
import { Repos} from '../repos';
import { HttpClient} from '@angular/common/http';
import {GitService} from '../git.service';
import { User } from '../user';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {


  username: string = "";
  result: any;
  id:number;


  constructor(private http: HttpClient){
  }

  ngOnInit() {

  }

  reposs = [];


    repos(){
      this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=4fe3329307fd3fd0c3d14287d31116739c20e87e')
      .subscribe ((result) => {
        this.result = result;
        console.log(this.result);


        for (let i = 0;i < result["length"];i++){

          let newRepo = new Repos('','',0,0,'',0);

          newRepo.name = result[i].name;
          newRepo.forks = result[i].forks;
          newRepo.language = result[i].language;
          newRepo.git_url = result[i].git_url;

          this.reposs.push(newRepo);
          }



      })
    }



  }
