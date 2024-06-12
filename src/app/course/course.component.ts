import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = {
    courseName: '',
    courseCode: '',
    description: '',
    credits:'' ,
    department: ''
  };
  courses: Course[] = [];
  editMode: boolean = false;
  editCourseCode: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  saveCourse(): void {
    if (this.editMode) {
      this.courseService.updateCourse(this.editCourseCode, this.course).subscribe(
        (updatedCourse) => {
          if (updatedCourse) {
            this.loadCourses();
            this.resetForm();
          }
        }
      );
    } else {
      this.courseService.addCourse(this.course).subscribe(
        (newCourse) => {
          this.courses.push(newCourse);
          this.resetForm();
        }
      );
    }
  }

  editCourse(course: Course): void {
    this.course = { ...course };
    this.editMode = true;
    this.editCourseCode = course.courseCode;
  }

  deleteCourse(courseCode: string): void {
    this.courseService.deleteCourse(courseCode).subscribe(
      (success) => {
        if (success) {
          this.loadCourses();
        }
      }
    );
  }

  resetForm(): void {
    this.course = {
      courseName: '',
      courseCode: '',
      description: '',
      credits: '',
      department: ''
    };
    this.editMode = false;
    this.editCourseCode = '';
  }
}