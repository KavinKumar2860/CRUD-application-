import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  
  userForm: boolean;
  isNewUser: boolean;
  
  newUser: any = {};
  
  editUserForm: boolean;
  editedUser: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {//it takes first component in webpage
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();//prints the data in array in userServices
  }

  showEdit(user: User) {//shows the data in array before edit
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  show() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  save(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  update() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  delete(user: User) {
    this.userService.deleteUser(user);
  }

  cancelE() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancel() {
    this.newUser = {};
    this.userForm = false;
  }

}