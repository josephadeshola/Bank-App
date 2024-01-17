import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import { BankingService } from '../services/banking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [],
})
export class SignupComponent {
  // signup Details
  fullName = '';
  email = '';
  phone = '';
  password = '';
  optionalLabel = '';
  // personal Details
  userName = '';
  birth = '';
  address = '';
  nin_bvn = '';
  ninBvn = '';
  language = '';
  marital = '';
  // login Details
  userEmail = '';
  userPass = '';
  public response: any = {};
  public message = '';
  public style = 'error';
  // first = '';
  constructor(
    public _formBuilder: FormBuilder,
    public _matStepperIntl: MatStepperIntl,
    public bankingService: BankingService,
    public SnackBar: MatSnackBar,
    public toast: ToastService,
    public route:Router
  ) { }
  public firstFormGroup = this._formBuilder.group({
    fullName: ['fola', Validators.required],
    email: ['kfolai@gmail.com', [Validators.required, Validators.email]],
    phone: [
      '07060670474',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    password: [
      '69697527',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
    termsAndConditions: [false, Validators.requiredTrue],
    userName: ['ay.com', Validators.required],
    birth: ['2005-02-9', Validators.required],
    address: ['temidere 23 ilorin kwara state', Validators.required],
    nin_bvn: [
      '33456213535',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    language: ['yoruba', Validators.required],
    gender: ['male', Validators.required],
    marital: ['single', Validators.required],
  });
  StartRegister() {
    if (this.firstFormGroup.valid) {
      this.bankingService.setUserCreate(this.firstFormGroup.value).subscribe(data => {
        this.response = data;
        console.log(data);

        if (this.response.status == true) {
          this.SnackBar.open('Registration Successful', '', {
            duration: 4000,
          });
          this.route.navigate(["/login"])
        }
        else {
          this.message = "email already exist"
          this.SnackBar.open(this.message, this.style, {
            duration: 4000
          });
        }

      },(error) => {
        console.log(error, "error day");
      }
      );
    }
  }

}
