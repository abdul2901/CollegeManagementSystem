// import { Component, OnInit } from '@angular/core';
// import { RegistrationData } from './studentreg.model';
// import { Router } from '@angular/router';
// import { StudentService } from '../service/student.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor(private router:Router, private Service:StudentService) { }

//   ngOnInit(): void {
//   }
//   register(form:any){
//     this.Service.stu.firstName=form.value.firstName
//     this.Service.stu.lastName=form.value.lastName
//     this.Service.stu.email=form.value.email
//     this.Service.stu.password=form.value.password
//     this.Service.stu.confirmPassword=form.value.confirmPassword
//     this.Service.stu.dob=form.value.dob
//     this.Service.stu.address=form.value.address
//     this.Service.stu.phoneNumber=form.value.phoneNumber
//     this.Service.stu.major=form.value.major
//     this.router.navigate(['Login'])
//   }

// }
  

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { RegistrationData } from './studentreg.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {}

  register(form: NgForm): void {
    if (form.valid) {
      const registrationData: RegistrationData = form.value;
      this.registerService.registerStudent(registrationData).subscribe(
        response => {
          console.log('Registration successful:', response);
          this.router.navigate(['login']); // Navigate to login after successful registration
        },
        error => {
          console.error('Error during registration:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
