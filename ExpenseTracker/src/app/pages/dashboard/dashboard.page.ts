import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/api/api.service';
import { Transaction } from 'src/app/models/transaction-model';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DashboardPage implements OnInit {
  apiService = inject(ApiService);

  totalExpense = 0;
  test = [1, 2, 3];
  expenses: Transaction[] = [];
  income: Transaction[] = [];

  ngOnInit() {
    this.apiService.getExpenses().subscribe((res) => {
      this.expenses = res;
      console.log('ex', this.expenses);
    });
    this.apiService.getIncome().subscribe((res) => {
      this.income = res;
      // console.log('ex', this.expenses);
    });
    this.apiService.getExpenses().subscribe()
  }
}
