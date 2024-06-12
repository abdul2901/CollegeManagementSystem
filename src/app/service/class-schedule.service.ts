import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSchedule } from '../class-schedule/classSchedule.model';
@Injectable({
  providedIn: 'root'
})
export class ClassScheduleService {
  private apiUrl = 'https://localhost:7267/api/ClassSchedules'; 

  constructor(private http: HttpClient) { }

  getClassSchedules(): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(this.apiUrl);
  }

  addClassSchedule(schedule: ClassSchedule): Observable<ClassSchedule> {
    return this.http.post<ClassSchedule>(this.apiUrl, schedule);
  }

  updateClassSchedule(id: number, schedule: ClassSchedule): Observable<ClassSchedule> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ClassSchedule>(url, schedule);
  }

  deleteClassSchedule(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
