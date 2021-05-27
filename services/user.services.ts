import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public employee: User[] = [//created array
    {
      Eid: 1,
      EmployeeName: 'kavin',
      Field: 'A',
      age:23
    },
    {
      Eid: 2,
      EmployeeName: 'Keerthi',
      Field: 'M',
      age:34
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {//it shows the given data in array
    return this.employee;
  }

  addUser(user: User) {
    user.Eid = this.employee.length + 1;//Adding the new data to the array
    this.employee.push(user);

  }
  updateUser(user: User) {
    const index = this.employee.findIndex(u => user.Eid === u.Eid);// it checks the employeename is present in the User[] array in the employee function
    this.employee[index] = user;
  }
  deleteUser(user: User) {
    this.employee.splice(this.employee.indexOf(user), 1);//it delete the name in the User array
  }

}