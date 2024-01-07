import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

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

  // public firstFormGroup: any = '';
  first = '';
  optionalLabelText: string = '';
  optionalLabelTextChoices: string[] = ['Male', 'Female', 'Other'];
  // firstFormRadio = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });

  constructor(
    public _formBuilder: FormBuilder,
    public _matStepperIntl: MatStepperIntl
  ) {}
  public firstFormGroup = this._formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.maxLength(11)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/),
      ],
    ],
    optionalLabel: [],
  });
  public secondFormGroup = this._formBuilder.group({
    userName: ['', Validators.required],
    birth: ['', Validators.required],
    address: ['', Validators.required],
    nin_bvn: ['', Validators.required],
    language: ['', Validators.required],
    marital: ['', Validators.required],
  });
  public thirdFormGroup = this._formBuilder.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPass: [
      '',
      [
        Validators.required,
        Validators.minLength(6), // Adjust the minimum length as needed
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/), // At least one lowercase, one uppercase, and one numeric character
      ],
    ],
  });

  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstCtrl: ['', Validators.required],
  //   });
  // }
  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    this._matStepperIntl.changes.next();
  }

  StartRegister() {
    console.log(this.firstFormGroup.value);
  }
}
