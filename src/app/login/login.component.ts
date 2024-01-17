import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmail= ''
  userPass = ''
  
  constructor(public formbuild:FormBuilder, public Stepper:MatStepperIntl){}
  public firstFormGroup=this.formbuild.group({
    userEmail:['',[Validators.required,Validators.email]],
    userPass:['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  })
  StartLogin(){
    
  }
}
