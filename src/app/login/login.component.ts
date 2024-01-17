import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userEmail = '';
  userPass = '';
  public result: any = {};

  constructor(
    public formbuild: FormBuilder,
    public Stepper: MatStepperIntl,
    public loginService: LoginService,

  ) { }
  public firstFormGroup = this.formbuild.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPass: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
  });
  StartLogin() {
    if (this.firstFormGroup.valid) {
      console.log(this.firstFormGroup);
      
      this.loginService.setUserLogin(this.firstFormGroup.value).subscribe(
        (data) => {
          console.log(data);
          
          // if (this.result.status == true) {
          //   alert('login successful');
          // } else {
          //   console.log('Wrong');
          // }
        },
        (error) => {
          console.log(error, 'error day');
        }
      )
   
    }
  }
  // ngOnDestroy() {
  //   // Unsubscribe from subscriptions to avoid memory leaks
  //   this.sub.unsubscribe();
  // }
}
