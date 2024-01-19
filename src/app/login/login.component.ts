import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // login Details
  email = '';
  password = '';
  public result: any = {};

  constructor(
    public formbuild: FormBuilder,
    public loginservice:LoginService
  ) {}

  public secondFormGroup = this.formbuild.group({
    email: ['joy12d@gmail.com', [Validators.required, Validators.email]],
    password: [
      '123456',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
  });

  StartLogin() {
    if (this.secondFormGroup.valid) {
      const email = this.secondFormGroup.get('email')?.value;
      const password = this.secondFormGroup.get('password')?.value;
      this.loginservice
        .setUserLogin({ email, password })
        .subscribe((data) => {
          this.result = data;
          console.log(this.result);
        });
    }
  }
}
