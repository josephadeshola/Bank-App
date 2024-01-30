import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userData: any;
  bankInfo: any;
  amount: number | undefined;
  fullname: string = '';
  userEmail: string = '';
  showAmount: boolean = false;
  accountNumber=''

  constructor(
    public dashboardService: LoginService,
    public bankInfoService: DashboardService,
    public http: HttpClient,
    public formbuild: FormBuilder
  ) {} 
  public secondFormGroup = this.formbuild.group({
    accountNumber: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
  });

  ngOnInit() {
    // const user_id = localStorage.getItem('user_id');
    this.userData = this.dashboardService.getLoginData();
    if (this.userData) {
      this.amount = this.userData[0].amount;
      this.fullname = this.userData[0].fullName;
      console.log(this.amount);
    }  
  }
  transFer() {
    if (this.secondFormGroup.valid){
          console.log(this.secondFormGroup);
          
    }
    console.log(this.accountNumber);
    
    this.http
      .get<any>('http://localhost/bankdatabase/dashboard.php', {
        params: { accountNumber: this.accountNumber }    
        })
      .subscribe((data) => {
       console.log(data);
       if(data.valid){
        console.log(data.valid);        
       }
       else{
        alert('Invalid account number. Please enter a valid account number.');
       }
      });
  }
  toggleAmountVisibility() {
    this.showAmount = !this.showAmount;
  }
}
