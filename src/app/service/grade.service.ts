import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from '../grade/grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private apiUrl = 'https://localhost:7267/api/Grades'; 

  constructor(private http: HttpClient) { }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }

  addGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, grade);
  }

  updateGrade(id: string, grade: Grade): Observable<Grade> {
    return this.http.put<Grade>(`${this.apiUrl}/${id}`, grade);
  }

  deleteGrade(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}