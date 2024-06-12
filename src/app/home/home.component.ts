import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  redirecttohomepage(): void {
    this.router.navigate(['home']);
  }

  redirecttostudentpage(): void {
    this.router.navigate(['student']);
  }

  redirecttofacultypage(): void {
    this.router.navigate(['faculty']);
  }
  redirecttogradepage(): void {
    this.router.navigate(['grade']);
  }
  redirecttoclassschedulepage(): void {
    this.router.navigate(['classSchedule']);
  }
  redirecttocoursepage(): void {
    this.router.navigate(['course']);
  }
}

