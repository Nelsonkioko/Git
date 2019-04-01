import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { User } from './user';
import { Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  repos:Repos;
  constructor(private http:HttpClient) { 
  this.repos = new Repos("","",0,0,"",0);
  }

printToConsole(arg){
  console.log(arg);
}

 repoRequest(){
   interface ApiResponse  {
     name:string;
     git_url:number;
     description:string;
     forks:number;
     watches:number;
     language:string;
   }


   let promise = new Promise((resolve,reject)=>{
     this.http.get<ApiResponse>(environment.apiUrl + User.name +"/repos" + environment.key).toPromise().then(response=> {
       
        this.repos.name = response.name;
        this.repos.git_url = response.git_url;
        this.repos.description = response.description;
       

        
       console.log(this.repos);

     },
     error=>{
       console.log("Error occured");
     })
   })
   return promise;
 }

}
