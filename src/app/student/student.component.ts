import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirecttoregisterpage(): void {
    this.router.navigate(['Register']);
  }
  redirecttologinpage(): void {
    this.router.navigate(['login']);
  }
  
  
}
