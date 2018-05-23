import { Component, OnInit } from '@angular/core';
import { User } from '../user';
//import { USERS } from '../mock-users';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

userlist : User[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    console.log("Calling ngOnInit");
    this.getUserDetails();
  }

  getUserDetails() :void {
    //passing a id to retrieve
    console.log("Calling getUserDetails");
    
    this.userService.getUser('Test')
    .subscribe(users => this.userlist = users);
    
  }

}
