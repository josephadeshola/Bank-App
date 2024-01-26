import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl=("http://localhost/bankdatabase/dashboard.php")
  
  constructor(public https:HttpClient) { }
  getUserAmount(email:string){
    const url = `${this.baseUrl}dashboard.php`;
    const body= {email};

    return this.https.post(url, body);
  }
}
