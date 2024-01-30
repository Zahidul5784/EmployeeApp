import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  constructor(private http: HttpClient) {
    /* alert("component created");*/
  }

  ngOnInit(): void {
    /*  alert("component init");*/

    this.employee = new Employee();

    this.stuName = new FormControl(this.employee.empName, [Validators.required]);

    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employee.empId),
      empName: new FormControl(this.employee.empName, [Validators.required]),
      address: new FormControl()
    })

  }

  baseUrl: string = "https://localhost:7013/api/employee";
  employee!: Employee;
  employeeForm!: FormGroup;


  stuName!: FormControl;




  get employeeName() {
    return this.employeeForm.controls['studentName'];
  }

  SubmitForm() {


    this.http.post(this.baseUrl, this.employeeForm.value).subscribe();

    alert(JSON.stringify(this.employeeForm.value));

    console.log(this.employeeForm.value);
  }



}
