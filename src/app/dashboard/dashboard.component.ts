
import { Component} from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userData:any
  showAmount: boolean = false;

  constructor(public dashboardService:LoginService) { }

  ngOnInit(){
   this.userData=this.dashboardService.getLoginData()
   if(this.userData){
    console.log(this.userData);
    
   }
  }

  toggleAmountVisibility() {
    this.showAmount = !this.showAmount;
  }

}

