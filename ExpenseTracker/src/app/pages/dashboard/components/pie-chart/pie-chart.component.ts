import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Chart } from 'chart.js/auto';
import { Canvas } from 'src/app/models/canvas';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})

// Chart..extend({
//   afterFit: function() {
//     this.height = this.height + 50;
//   },
// });
export class PieChartComponent {
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef;

  @Input() dataSource: Canvas[] = [];
  @Input() labels: string[] = [];
  barChart: any;
  doughnutChart: any;
  lineChart: any;

  // ngOnInit(){
  //   this.doughnutCanvas.insta
  // }
  ngOnChanges() {
    this.doughnutChartMethod();
  }
  doughnutChartMethod() {
    if (this.doughnutCanvas) {
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.dataSource,
            },
          ],
        },
      });
    }
  }
}
