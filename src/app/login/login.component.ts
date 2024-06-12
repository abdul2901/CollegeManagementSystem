// import { Component, OnInit } from '@angular/core';
// import { RegisterComponent } from '../register/register.component';
// import { Router } from '@angular/router';
// import { StudentService } from '../service/student.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private router:Router, private service:StudentService) { }

//   ngOnInit(): void {
//   }
//   login(form:any){
//     if(this.service.stu.email==form.value.username && this.service.stu.password==form.value.password) 
//       {this.router.navigate(['studentdisplay'])}
//     }
// }

// login.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { LoginData } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {}

  // The method should take one argument of type NgForm
  login(form: NgForm): void {
    if (form.valid) {
      const loginData: LoginData = form.value;
      this.registerService.loginUser(loginData).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigate(['studentdisplay']); // Navigate to a protected route after successful login
        },
        error => {
          console.error('Error during login:', error);
          alert('Invalid login credentials'); // Show an error message on failed login
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
