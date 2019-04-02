import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {GitService } from '../git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  @Output() searchUser = new EventEmitter<string>();
  userName:string;
  
  constructor(private https: GitService) { }
 
  ngOnInit() {

  }

  search() {
    console.log(this.userName);
    
    this.searchUser.emit(this.userName);
  }

}
