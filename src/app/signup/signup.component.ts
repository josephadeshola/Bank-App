import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [],
})
export class SignupComponent implements OnInit {
  public firstFormGroup: any = '';
  first = '';
  optionalLabelText: string = '';
  optionalLabelTextChoices: string[] = ['Male', 'Female', 'Other'];
  firstFormRadio = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _matStepperIntl: MatStepperIntl
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }
  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    this._matStepperIntl.changes.next();
  }
}
