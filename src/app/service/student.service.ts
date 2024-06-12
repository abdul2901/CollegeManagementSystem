import { Injectable } from '@angular/core';
import { RegistrationData } from '../register/studentreg.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudentById(studentId: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  stu:RegistrationData={firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: new Date(2024,0,12),
    address: '',
    phoneNumber: '',
    major: '',}
    
}
