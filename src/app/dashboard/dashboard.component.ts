import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userEmail:string='';
  userAmount: number | undefined;
public showAmount=false

constructor(public dashbordServe:DashboardService){}

// ngOnInit(): void {
//   this.dashbordServe.getUserAmount(this.userEmail).subscribe((data:any)=>{
//     console.log(data);
//     if (data.status) {
//       this.userAmount = data.amount;
//     } else {
//       console.error('Error fetching user amount:', data.message);
//     }
//   },(error) => {
//     console.error('Error fetching user amount:', error);
//   }
//   )
  
// } 
  toggleAmountVisibility() {
    this.showAmount = !this.showAmount;
  }
}
