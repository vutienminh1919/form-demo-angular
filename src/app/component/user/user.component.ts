import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm : FormGroup | any;

  constructor() {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      age : new FormControl(''),
      gender: new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
      bio : new FormControl('')
    })
  }

}
