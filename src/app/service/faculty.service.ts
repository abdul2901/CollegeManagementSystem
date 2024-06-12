import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty } from '../faculty/faculty.model';


@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrl = 'https://localhost:7267/api/Faculties'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllFaculty(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }

  addFaculty(faculty: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this.apiUrl, faculty);
  }

  updateFaculty(faculty: Faculty): Observable<Faculty> {
    return this.http.put<Faculty>(`${this.apiUrl}/${faculty.id}`, faculty);
  }

  deleteFaculty(facultyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${facultyId}`);
  }
}

 