import { Component, OnInit } from '@angular/core';
import { Employee } from './employees';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  ngOnInit() {
    this.getEmployees();
  }

  onSubmit(employeeForm : NgForm) : void{
      this.add(employeeForm.value.firstname, employeeForm.value.lastname, employeeForm.value.age);
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

  add(firstname: string, lastname: string, age: number):void {
    if (!firstname || !lastname || !age) { return; }
    firstname = firstname.trim();
    lastname = lastname.trim();
    this.employeeService.addEmployee({ firstname, lastname, age } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }
}
