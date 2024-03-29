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
  styles: [`
      .custom-snackbar {
        background-color: red;
        color: #fff;
        padding: 16px;
        border-radius: 4px;
      }
    `],
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
  hide = true;

  public response: any = {};
  public message = '';
  public style = 'Close';
  // first = '';
  constructor(
    public _formBuilder: FormBuilder,
    public _matStepperIntl: MatStepperIntl,
    public bankingService: BankingService,
    public SnackBar: MatSnackBar,
    public toast: ToastService,
    public route: Router
  ) { }
  public firstFormGroup = this._formBuilder.group({
    fullName: ['Ayomide john', Validators.required],
    email: ['adsehola39@gmail.com', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.maxLength(10), Validators.minLength(10)],
    ],
    password: [
      '787878',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
    termsAndConditions: [false, Validators.requiredTrue],
    userName: ['joseph', Validators.required],
    birth: ['2004-08-25', Validators.required],
    address: ['oyo state', Validators.required],
    nin_bvn: [
      '838373837',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    language: ['english', Validators.required],
    gender: ['male', Validators.required],
    marital: ['single', Validators.required],
  });

  StartRegister() {
    if (this.firstFormGroup.valid) {
      this.bankingService.setUserCreate(this.firstFormGroup.value).subscribe(data => {
        this.response = data;
        console.log(data);

        if (this.response.status === true) {
          this.SnackBar.open('Registration Successful', '', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
          });
          this.route.navigate(["/verify/account"])
        }
        // else if(this.response.status === false){
        //   this.message = `Phone number is not valid`
        //   this.SnackBar.open(this.message, this.style, {
        //   duration: 3000,
        //   panelClass: ['custom-snackbar'],
        // });
        // }
        else {
          this.message = "email already exist"
          this.SnackBar.open(this.message, this.style, {
            duration: 3000,
            panelClass: ['custom-snackbar'],
          });
        }
        
      }, (error) => {
        console.log(error, "error day");
      }
      );
    }
  }

}

