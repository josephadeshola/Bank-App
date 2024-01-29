import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loginData:any
baseUrl="http://localhost/bankdatabase/signin.php";
  constructor(public http:HttpClient) { }
  setUserLogin(obj:any){
    return this.http.post(`${this.baseUrl}/login`, obj);
  }
  saveLoginData(data:any){
    localStorage.setItem('loginData', JSON.stringify(data));
  } 
  getLoginData(): any {
    const data = localStorage.getItem('loginData');
    return data ? JSON.parse(data) : null;
  }
}
