import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { EMPLOYEES } from './employees/employees';
import { Employee } from './employees/employees';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private employeesUrl = 'api/employees';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(catchError(this.handleError('Cannot get Employees', [])));
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`Cannot get Employee id=${id}`))
    );
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
      const id = typeof employee === 'number' ? employee : employee.id;
      const url = `${this.employeesUrl}/${id}`;
      return this.http.delete<Employee>(url,httpOptions).pipe(
        catchError(this.handleError<Employee>('Cannot delete Hero'))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, httpOptions).pipe(
      catchError(this.handleError<any>('Cannot update Employee'))
    );
  }

  addEmployee (employee: Employee): Observable<Employee> {
     return this.http.post<Employee>(this.employeesUrl, employee, httpOptions).pipe(
        catchError(this.handleError<Employee>('Cannot add Employee'))
     );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
