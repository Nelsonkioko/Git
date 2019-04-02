import { Component, OnInit } from '@angular/core';
import {GitService } from './git.service';
import { Gitsearch } from './gitsearch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data:any;
  repos:any;
  username:string;
  constructor(private gitservice:GitService)
  {
    this.gitservice.getResults('Nelsonkioko').subscribe(data => {
    
      this.data= data;
     });
   
     this.gitservice.getRepos('Nelsonkioko').subscribe(repos => {
       
       this.repos= repos;
      });

     
  }
  search(username){
    console.log(username);
    this.gitservice.getResults(username).subscribe(data => {
    
      this.data= data;
     });
   
     this.gitservice.getRepos(username).subscribe(repos => {
       
       this.repos= repos;
      })
  }

  ngOnInit(){ }

  }
 