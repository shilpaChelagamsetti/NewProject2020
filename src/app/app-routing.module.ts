import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProjectsComponent } from 'src/app/home/projects/projects.component';
import { StudentsComponent } from 'src/app/home/students/students.component';
import { ProjectDetailsComponent } from 'src/app/home/project-details/project-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'mainpage',
    component: HomeComponent,
    children: [{
      path: 'students',
      component: StudentsComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'projectDetails/:id',
      component: ProjectDetailsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
