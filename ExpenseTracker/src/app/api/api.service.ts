import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction-model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  http = inject(HttpClient);

  getExpenses() {
    console.log("Hey")
    return this.http.get(
      'https://localhost:7285/api/Transaction/GetUserExpenses?userId=1'
    ) as Observable<any>
  }

  getIncome(): Observable<any> {
    return this.http.get(
      'https://localhost:7285/api/Transaction/GetUserIncome?userId=1'
    );
  }

  getCategories(): Observable<any> {
    return this.http.get('https://localhost:7285/api/Category/GetAll?userId=1');
  }
}
