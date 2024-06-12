import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../service/faculty.service';
import { Faculty } from './faculty.model';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  faculty: Faculty = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    department: '',
    coursesTaught: [],
    courseCode: ''
  };
  facultyMembers: Faculty[] = [];
  editMode: boolean = false;
  editFacultyId: number = 0;

  constructor(private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.loadFacultyMembers();
  }

  loadFacultyMembers(): void {
    this.facultyService.getAllFaculty().subscribe((facultyMembers: Faculty[]) => this.facultyMembers = facultyMembers);
  }

  saveFaculty(): void {
    if (this.editMode) {
      this.facultyService.updateFaculty(this.faculty).subscribe(
        (updatedFaculty: any) => {
          if (updatedFaculty) {
            this.loadFacultyMembers();
            this.resetForm();
          }
        }
      );
    } else {
      this.facultyService.addFaculty(this.faculty).subscribe(
        (newFaculty: Faculty) => {
          this.facultyMembers.push(newFaculty);
          this.resetForm();
        }
      );
    }
  }

  editFaculty(faculty: Faculty): void {
    this.faculty = { ...faculty };
    this.editMode = true;
    this.editFacultyId = faculty.id;
  }

  deleteFaculty(facultyId: number): void {
    this.facultyService.deleteFaculty(facultyId).subscribe(
      (success: any) => {
        if (success) {
          this.loadFacultyMembers();
        }
      }
    );
  }

  resetForm(): void {
    this.faculty = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0,
      department: '',
      coursesTaught: [],
      courseCode:''
    };
    this.editMode = false;
    this.editFacultyId = 0;
  }
}