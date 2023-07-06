import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../api/api.service';
import { Transaction } from '../../models/transaction-model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TransactionPage {

  // constructor(private apiService : ApiService){}
  apiService = inject(ApiService);

  test = [1,2,3]
  expenses: Transaction[] =  [];
  // ngOnInit() {
  //   this.apiService.getExpenses().subscribe((res)=> {
  //     this.expenses = res;
  //     console.log("ex", this.expenses);
      
  //         })
  // }

}
