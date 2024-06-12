export interface Faculty {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    department: string;
    coursesTaught: string[];
    courseCode:string; // Array of course names
  }