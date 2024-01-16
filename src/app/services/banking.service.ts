import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http: HttpClient) { }

  setUserCreate(obj: any){
    return this.http.post('http://localhost/bankdatabase/signup.php', obj);
  }
}