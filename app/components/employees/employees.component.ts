import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  isDisabled = false;
  imgPath1 = "../assets/img/img1.jpeg";
  imgPath2 = "../assets/img/img2.jpeg"

  selectedEmp: any;

  // jun 9, 2024
  currentDate = new Date(2024, 5, 9);

  employees = [
    { name: "Andreea", age: 44, job: "Software Developer", company: "Google", department: "IT" },
    { name: "Alexandru", age: 24, job: "Software Developer", company: "IMB", department: "IT" },
    { name: "Sorana", age: 34, job: "Software Developer", company: "Facebook", department: "IT" },
    { name: "Maria", age: 22, job: "Software Developer", company: "Microsoft", department: "IT" },
    { name: "Ana", age: 26, job: "Software Developer", company: "Disney", department: "IT" }
  ]

  clickButton() {
    alert("This is my first click event!")
  }

  clickEmployee(employee: any) {
    this.selectedEmp = employee;
    console.log("Employee data is: " + JSON.stringify(this.selectedEmp));
    console.log("Employee values: " + JSON.stringify(employee));

  }
}
