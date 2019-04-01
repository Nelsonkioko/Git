import { Component ,OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GitService} from './git.service';
import { User } from './user';
import {TimePipe} from './time.pipe'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubs';

  today: number = Date.now();


  username: string = "";
  response: any;



  constructor(private http: HttpClient){
  }

  ngOnInit() {

  }


  search(){
    this.http.get('https://api.github.com/users/' + this.username + '?access_token=4fe3329307fd3fd0c3d14287d31116739c20e87e')
    .subscribe ((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}

