import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public Employee: IEmployee[] = []; 

  @Output() sendEmployee = new EventEmitter<IEmployee>(); 

  constructor(private employeesServices: EmployeesService) { }

  ngOnInit(): void {
    this.employeesServices.getAllEmployees().subscribe((data) => {
      this.Employee = data;
      console.log(this.Employee);
    });
  }

  public editEmployee(employee: IEmployee) {
    this.sendEmployee.emit(employee); 
  }
}
