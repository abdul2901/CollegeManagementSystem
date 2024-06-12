import { Component, OnInit } from '@angular/core';
import { Grade } from './grade.model';
import { GradeService } from '../service/grade.service';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  grade: Grade = {
    id:'',
    student: '',
    coursecode: '',
    gradevalue: '',
   
  };
  grades: Grade[] = [];
  editMode: boolean = false;
  isFaculty: boolean = false; // Determine this based on user role

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.loadGrades();
    this.isFaculty = this.checkIfFaculty();
  }

  loadGrades(): void {
    this.gradeService.getGrades().subscribe((grades: Grade[]) => this.grades = grades);
  }

  saveGrade(): void {
    if (this.editMode) {
      this.gradeService.updateGrade(this.grade.id!, this.grade).subscribe(
        (updatedGrade) => {
          if (updatedGrade) {
            this.loadGrades();
            this.resetForm();
          }
        }
      );
    } else {
      this.gradeService.addGrade(this.grade).subscribe(
        (newGrade) => {
          this.grades.push(newGrade);
          this.resetForm();
        }
      );
    }
  }

  editGrade(grade: Grade): void {
    this.grade = { ...grade };
    this.editMode = true;
  }

  deleteGrade(id: string): void {
    this.gradeService.deleteGrade(id).subscribe(
      (success) => {
        if (success) {
          this.loadGrades();
        }
      }
    );
  }

  resetForm(): void {
    this.grade = {
      id:'',
      student: '',
      coursecode: '',
      gradevalue: '',
     
    };
    this.editMode = false;
  }

  checkIfFaculty(): boolean {
    // Implement logic to determine if the current user is a faculty member
    return true; // Replace with actual logic
  }
}
