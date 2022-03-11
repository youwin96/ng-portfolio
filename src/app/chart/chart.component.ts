import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { NftsService } from '../nfts.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  @Input() lineData: [] = []

  constructor(private nftsService: NftsService) { }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['06/03', '07/03', '08/03', '09/03', '10/03', '11/03'],
        datasets: [{
          label: 'FloorPrice',
          borderColor: 'rgb(227, 11, 93)',
          backgroundColor: 'rgb(102, 252, 241)',
          pointBackgroundColor: 'rgb(102, 252, 241)',

          data: this.lineData,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });

  }
}
