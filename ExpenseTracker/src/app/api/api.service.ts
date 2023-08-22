import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction-model';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add more headers here
    }),
  };

  getExpenses() {
    return this.http.get(
      'https://localhost:7285/api/Transaction/GetUserExpenses?userId=1'
    ) as Observable<Transaction[]>;
  }

  getIncome() {
    return this.http.get(
      'https://localhost:7285/api/Transaction/GetUserIncome?userId=1'
    ) as Observable<Transaction[]>;
  }

  getCategories() {
    return this.http.get(
      'https://localhost:7285/api/Category/GetAll?userId=1'
    ) as Observable<Category[]>;
  }

  postTransaction(payload: Transaction) {
    console.log('payload', payload);

    return this.http.post(
      'https://localhost:7285/api/Transaction/CreateEdit',
      payload,
      this.httpOptions
    );
  }
}
