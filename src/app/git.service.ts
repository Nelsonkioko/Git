import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Gitsearch } from './gitsearch'
import { environment } from 'src/environments/environment';

import {Repos } from './repos';



@Injectable({
  providedIn: 'root'
})

export class GitService {

constructor(private http:HttpClient){}
// Creating methods that we will use to get data from git hub
getResults(userName){
  return this.http.get<Gitsearch>(environment.apiUrl + userName + "?access_token=" + environment.key);
}
getRepos(userName){
  return this.http.get<Repos>(environment.apiUrl + userName + '/repos' + "?access_token=" + environment.key);
}
}
