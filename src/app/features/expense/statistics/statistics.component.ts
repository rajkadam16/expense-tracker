import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
@Component({
  selector: 'app-statistics',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
 public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public chartLabels: string[] = ['Jan', 'Feb', 'Mar'];
  public chartType: any = 'bar';

public chartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    { data: [65, 59, 80], label: 'Revenue' }
  ]
};

}

