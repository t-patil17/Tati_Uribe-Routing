import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConferenceComponent } from './conference/conference.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: "", component:HomeComponent, pathMatch:"full"
  },
  
  {
    path: "login", component:LoginComponent,
  },
  
  {
    path: "courses", component:CoursesComponent
  },
  
  {
    path: "about-me", component:AboutMeComponent
  },
  
  {
    path: "conference", component:ConferenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
