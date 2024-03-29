import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // login Details
  public email = '';
  public password = '';
  public result: any = {};
  public message = '';
  public style = ''
  public hide = true;
  public verifyMessage = ''
  public verifyClass = ''
  constructor(
    public formbuild: FormBuilder,
    public loginservice: LoginService,
    public route: Router,
    public SnackBar: MatSnackBar
  ) { }
  public secondFormGroup = this.formbuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
  });
  ngOnInit(): void {
    this.verifyMessage = 'Account Verified Successfully Please proceed to login';
    this.verifyClass = 'alert alert-success border border-none py-3 text-center';
    setTimeout(() => {
      this.verifyClass = '';
      this.verifyMessage = '';
    }, 3000);
  }
  StartLogin() {
    if (this.secondFormGroup.valid) {
      this.loginservice
        .setUserLogin(this.secondFormGroup.value).subscribe(data => {
          this.result = data;
          console.log(data);
          if (this.result.status == true) {
            const loginData = this.loginservice.getLoginData();
            if (loginData) {
              this.loginservice.saveLoginData(data)
              this.SnackBar.open('Registration Successful', 'success', {
                duration: 4000,
              });
              console.log(loginData);
              this.route.navigate(["/dashboard"])
            }
          }
          else if (this.result.status == false) {
            this.message = "Invalid password"
            this.SnackBar.open(this.message, this.style, {
              duration: 4000
            })
          }
          else {
            this.message = "Invalid Email Address"
            this.SnackBar.open(this.message, this.style, {
              duration: 4000
            })
          }
        }, (error) => {
          console.log(error);

        }
        )
    }

  }
}
