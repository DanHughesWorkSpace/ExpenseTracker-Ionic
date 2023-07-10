import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/api/api.service';
import { Transaction } from 'src/app/models/transaction-model';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DashboardPage implements OnInit {
  apiService = inject(ApiService);
  router = inject(Router)
  totalExpense = 0;
  totalIncome = 0;
  test = [1, 2, 3];
  expenses: Transaction[] = [];
  income: Transaction[] = [];

  ngOnInit() {
    this.apiService.getExpenses().subscribe((res) => {
      this.expenses = res;
      console.log('ewx', this.expenses);
      this.totalExpense += this.getTotal(this.expenses)

    });
    this.apiService.getIncome().subscribe((res) => {
      this.income = res;
      console.log(this.getTotal(this.income))
      this.totalIncome += this.getTotal(this.income)
      // console.log('ex', this.expenses);
    });

   
  }

  routeToCanvas() {
    console.log("heyyyyyyyyy")
    this.router.navigateByUrl("/canvas")
  }
  
getTotal(expensesList: Transaction[]){
  return expensesList.reduce((total, transaction) => total + transaction.amount, 0)
}

}

