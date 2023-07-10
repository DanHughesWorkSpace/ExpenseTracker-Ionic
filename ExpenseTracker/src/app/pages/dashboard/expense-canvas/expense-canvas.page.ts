import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CanvasPage } from '../canvas/canvas.page';

@Component({
  selector: 'app-expense-canvas',
  templateUrl: './expense-canvas.page.html',
  styleUrls: ['./expense-canvas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CanvasPage],
})
export class ExpenseCanvasPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
