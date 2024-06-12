// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { RegistrationData } from '../register/studentreg.model';
// import { Student } from '../student/student.model';
// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
//   private apiUrl = 'https://localhost:7267/api/Registrations'; // Replace with your actual API endpoint

//   constructor(private http: HttpClient) { }

//   // Method to register a new student
//   registerStudent(studentData: RegistrationData): Observable<any> {
//     const headers = new HttpHeaders({'Content-Type': 'application/json'});

//     return this.http.post<RegistrationData>(`${this.apiUrl}/register`, studentData, { headers })
//       .pipe(
//         catchError(this.handleError<any>('registerStudent'))
//       );
//   }
//   loginStudent(email: string, password: string): Observable<Student> {
//     const headers = new HttpHeaders({'Content-Type': 'application/json'});
//     const loginData = { email, password };

//     return this.http.post<Student>(`${this.apiUrl}/login`, loginData, { headers })
//       .pipe(
//         catchError(this.handleError<Student>('loginStudent'))
//       );
//   }

//   // Method to handle errors
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(`${operation} failed: ${error.message}`);  // log to console instead
//       return of(result as T);  // Let the app keep running by returning an empty result.
//     };
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RegistrationData } from '../register/studentreg.model';
import { LoginData } from '../login/login.model'; // Create this model to match login data

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://localhost:7267/api/Registrations'; // Adjust to match your API

  constructor(private http: HttpClient) { }

  // Register a new student
  registerStudent(studentData: RegistrationData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, studentData, { headers })
      .pipe(
        catchError(this.handleError<any>('registerStudent'))
      );
  }

  // Login user
  loginUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, loginData, { headers })
      .pipe(
        map(response => {
          // Here you could store the token in local storage or session storage
          localStorage.setItem('authToken', response.token);
          return response;
        }),
        catchError(this.handleError<any>('loginUser'))
      );
  }

  // Handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
