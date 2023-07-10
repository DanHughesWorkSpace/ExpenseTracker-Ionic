import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-income-canvas',
  templateUrl: './income-canvas.page.html',
  styleUrls: ['./income-canvas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncomeCanvasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
