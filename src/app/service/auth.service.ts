
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'https://localhost:7151/api/Students'; // Replace with actual API URL

//   constructor(private http: HttpClient) {}

//   login(credentials: { username: string; password: string }): Observable<boolean> {
//     return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
//       map(response => {
//         localStorage.setItem('token', response.token);
//         return true;
//       }),
//       catchError(error => {
//         console.error('Login error', error);
//         return of(false);
//       })
//     );
//   }

//   register(registrationInfo: { username: string; password: string; email: string }): Observable<boolean> {
//     return this.http.post(`${this.apiUrl}/register`, registrationInfo).pipe(
//       map(response => true),
//       catchError(error => {
//         console.error('Registration error', error);
//         return of(false);
//       })
//     );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('token');
//   }
// }
