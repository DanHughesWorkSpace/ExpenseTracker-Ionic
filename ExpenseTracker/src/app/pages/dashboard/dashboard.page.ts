import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core/dist/types/interface';
import { ApiService } from 'src/app/api/api.service';
import { Transaction } from 'src/app/models/transaction-model';
import { from, groupBy, map, mergeMap, reduce } from 'rxjs';
import { Router } from '@angular/router';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { Category } from 'src/app/models/category';
import { Canvas } from 'src/app/models/canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PieChartComponent,
    WalletComponent,
  ],
})
export class DashboardPage implements OnInit {
  apiService = inject(ApiService);
  router = inject(Router);
  totalExpense = signal(0);
  totalIncome = signal(0);
  walletValue = computed(() => this.totalIncome() - this.totalExpense());
  test = [1, 2, 3];
  expenses: Transaction[] = [];
  income: Transaction[] = [];

  selectedSegment = 'expense';
  canvasDataSource: Canvas[] = [];
  canvasLabels: string[] = [];
  idToNameMap: Record<number, Category> = {};

  ngOnInit() {
    this.apiService.getCategories().subscribe((res) => {
      res.forEach((category) => {
        this.idToNameMap[category.id] = category || 'Unknown Category';
      });
    });
    this.apiService.getExpenses().subscribe((res) => {
      this.expenses = res;
      const canvasData = res.map((expense) => {
        return {
          id: this.idToNameMap[expense.transaction_Category_Id].name,
          value: expense.amount,
        };
      });
      this.canvasDataSource = this.groupAndSumById(canvasData);
      this.canvasLabels = this.createCanvasLabels(this.canvasDataSource);

      this.totalExpense.set(this.getTotal(this.expenses));
    });
    this.apiService.getIncome().subscribe((res) => {
      this.income = res;
      this.totalIncome.set(this.getTotal(this.income));
    });
  }

  onSegmentChanged(event: string) {
    console.log('heyyyyyyyyy', event);
    // this.router.navigateByUrl('/canvas');
  }

  getTotal(expensesList: Transaction[]) {
    return expensesList.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

  groupAndSumById(inputArray: Canvas[]) {
    const groupedMap = new Map();

    for (const item of inputArray) {
      if (groupedMap.has(item.id)) {
        groupedMap.get(item.id).value += item.value;
      } else {
        groupedMap.set(item.id, { id: item.id, value: item.value });
      }
    }

    const groupedArray = Array.from(groupedMap.values());
    return groupedArray;
  }

  createCanvasLabels(canvasData: Canvas[]): string[] {
    return canvasData.map((item) => item.id);
  }
}
