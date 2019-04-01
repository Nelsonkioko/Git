import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {GitService} from './git.service';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReposComponent } from './repos/repos.component';
import { TimePipe } from './time.pipe';



const routes:Routes=[
  {path:"repos",component:ReposComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    TimePipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgProgressHttpModule,
    NgProgressModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
