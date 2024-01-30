import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {


  api: string = "https://localhost:7013/api/employee"

  data: Employee[] = [];


  constructor(private http: HttpClient) {

  }


    ngOnInit(): void {
      this.http.get<Employee[]>(this.api).subscribe({
        next: (res) => {
          this.data = res;

          console.log(res);
        }


        })
    }

}
