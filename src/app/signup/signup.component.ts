import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import { BankingService } from '../services/banking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from 'angular-toastify';

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
    public toast: ToastService
  ) { }
  public firstFormGroup = this._formBuilder.group({
    fullName: ['Ayomide', Validators.required],
    email: ['ayujo@gmail.com', [Validators.required, Validators.email]],
    phone: [
      '08069697526',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    password: [
      '557880',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
    userName: ['joseph125d', Validators.required],
    birth: ['08-25-2004', Validators.required],
    address: ['Temidere 5 No 23 ilorin kwara state', Validators.required],
    nin_bvn: [
      '12132345678',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    language: ['English', Validators.required],
    marital: ['Single', Validators.required],
    // userEmail: ['ayojjjjjjy@gmail.com', [Validators.required, Validators.email]],
    // userPass: [
    //   '557880',
    //   [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    // ],
  });
  // updateOptionalLabel() {
  //   this._matStepperIntl.optionalLabel = this.optionalLabelText;
  //   this._matStepperIntl.changes.next();
  // }
  StartRegister() {
    if (this.firstFormGroup.valid) {
      this.bankingService.setUserCreate(this.firstFormGroup.value).subscribe(data => {
        this.response = data;
        console.log(data);
        
        if (this.response.status == true) {
          alert("good")
          this.toast.success('message');
        }
        else {
          this.message = "email already exist"
          this.SnackBar.open(this.message, this.style, {
            duration: 4000
          });
        }
      }, (error) => {
        console.log(error, "error day");

      }
      );
    }
  }

}
