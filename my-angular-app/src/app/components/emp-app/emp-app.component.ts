import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';

@Component({
  selector: 'app-emp-app',
  templateUrl: './emp-app.component.html',
  styleUrls: ['./emp-app.component.css']
})
export class EmpAppComponent implements OnInit {
  closeEmpForm: boolean = false;
  constructor() { }

  public editEmployee!: IEmployee;
  ngOnInit(): void {
   
  }

  closeForm() {
    this.closeEmpForm = true;
  }

}
