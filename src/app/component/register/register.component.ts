import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;

  constructor() {
  }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
          password: new FormControl('', Validators.required),
          confirmPassword: new FormControl('', Validators.required)
        },
      )
    });
  }


  onSubmit() {
    console.log(this.registerForm)
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ?
      null : {
        passwordNotMatch: true
      };

  }
}
