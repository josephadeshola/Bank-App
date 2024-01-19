import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  setUserLogin(obj:any){
    return this.http.post("http://localhost/bankdatabase/signin.php", obj);
  }
}
