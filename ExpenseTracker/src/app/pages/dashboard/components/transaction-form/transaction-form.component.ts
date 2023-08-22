import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable, map } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { Transaction } from 'src/app/models/transaction-model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TransactionFormComponent,
  ],
})
export class TransactionFormComponent {
  private readonly apiService = inject(ApiService);
  private readonly formBuilder = inject(FormBuilder);
  ionicForm!: FormGroup;
  @Input() newFormType = 'expense';

  categorgies$ = this.apiService.getCategories();
  dataSource: any;
  disabled = true;

  newTransaction: Transaction = {
    id: 0,
    user_Id: 1,
    description: '',
    amount: 0,
    type: this.newFormType,
    transaction_Category_Id: 0,
    date_sCreated: new Date().toString(),
  };
  ngOnInit() {
    this.translateCategoryId('fuel').subscribe((res) =>
      console.log('res', res)
    );

    console.log('nft', this.translateCategoryId('fuel'));

    this.categorgies$.subscribe(
      (res) =>
        (this.dataSource = res.filter(
          (response) => response.type === this.newFormType
        ))
    );
    this.ionicForm = this.formBuilder.group({
      type: [
        { value: this.newFormType, disabled: true },
        [Validators.required],
      ],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  saveBtn() {
    var formValues = this.ionicForm.value;

    this.translateCategoryId(formValues.category).subscribe((res) => {
      this.newTransaction.transaction_Category_Id = res;
      this.newTransaction.description = formValues.description;
      this.newTransaction.amount = formValues.amount;
      if (this.ionicForm.valid) {
        console.log('yeee boi', this.newTransaction);
        this.apiService.postTransaction(this.newTransaction).subscribe({
          next: () => {
            console.log('it worked');
          },
          error: (error) => {
            console.log('err', error);
          },
        });
        return false;
      } else {
        return console.log('Please provide all the required values!');
      }
    });
  }

  translateCategoryId(name: string): Observable<number> {
    return this.categorgies$.pipe(
      map((res) => {
        const foundResponse = res.find((response) => response.name === name);
        return foundResponse!.id;
      })
    );
  }
}
