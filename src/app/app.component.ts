import { Component ,OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GitService} from './git.service';
import { User } from './user';
import {TimePipe} from './time.pipe'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today: number = Date.now();


  username: string = "";
  response: any;



  constructor(private http: HttpClient){
  }

  ngOnInit() {

  }


  search(){
    this.http.get('https://api.github.com/users/' + this.username + '?access_token='+environment.key)
    .subscribe ((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}
