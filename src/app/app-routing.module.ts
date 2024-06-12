import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GradeComponent } from './grade/grade.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { StudentdisplayComponent } from './studentdisplay/studentdisplay.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'student',component:StudentComponent},
  {path:'Login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'grade',component:GradeComponent},
  {path:'course',component:CourseComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'classSchedule',component:ClassScheduleComponent},
 {path:'studentdisplay',component:StudentdisplayComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
