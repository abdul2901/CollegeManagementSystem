import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './grade/grade.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { StudentdisplayComponent } from './studentdisplay/studentdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    GradeComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FacultyComponent,
    ClassScheduleComponent,
    StudentdisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
