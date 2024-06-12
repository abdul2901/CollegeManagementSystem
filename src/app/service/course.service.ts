import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../course/course.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'https://localhost:7267/api/Courses'; // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(courseCode: string, updatedCourse: Course): Observable<Course> {
    const url = `${this.apiUrl}/${courseCode}`;
    return this.http.put<Course>(url, updatedCourse);
  }

  deleteCourse(courseCode: string): Observable<boolean> {
    const url = `${this.apiUrl}/${courseCode}`;
    return this.http.delete<boolean>(url);
  }
}
