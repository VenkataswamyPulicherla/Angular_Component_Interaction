import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent implements OnInit {
  @Input() selectedEmployee!: IEmployee;
  @Output() closeFormEvent = new EventEmitter<boolean>();
  isClosed: boolean = false;

  constructor() { }
   

  fullName: any;
  ngOnInit(): void {
    this.isClosed = false;
  }
  
  // public getFullName(): string {
  //   return `${this.selectedEmployee.first_name} ${this.selectedEmployee.last_name}`;
  //   // this.fullName = this.selectedEmployee.first_name + this.selectedEmployee.last_name
  // }

closeForm() {
    this.isClosed = true;
    this.closeFormEvent.emit(this.isClosed);
  }

}
