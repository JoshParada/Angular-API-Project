import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
//import * as Plotly from 'plotly.js';
import { StockService } from '../stock.service';
import { Daily } from './daily';

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {


  public graph = {
    data: [
      { x: ['1','2','3'], y: [2,2,2], name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
      { x: ['1','2','3'], y: [3,3,3], name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
      { x: ['1','2','3'], y: [4,4,4], name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: ['1','2','3'], y: [5,5,5], name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
  
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

 
 


  @Input() symbolSearch: string = ''
  results: Daily[] = [];


  openArr: number[] = []
  highArr: number[] = []
  lowArr: number[] = []
  closeArr: number[] = []
  dateArr: string[] = []

  lastWeek = new Date();
  pastDate = this.lastWeek.getDate() - 7;

  
  searchDailyStock() {

   
    this.lastWeek.setDate(this.pastDate);

    this.stockService
      .searchDailyStock(this.symbolSearch, this.lastWeek.toISOString().slice(0, 10))
      .then((resp: any) => {
        this.results = resp.data;

        let openA = []
        let closeA = []
        let highA = []
        let lowA = []
        let dateA = []

        for (let day of this.results) {
          openA.push(day.data.open)
          closeA.push(day.data.close)
          highA.push(day.data.high)
          lowA.push(day.data.low)
          dateA.push((day.date).slice(0, 10))
        }


        this.openArr = openA
        this.closeArr = closeA
        this.highArr = highA
        this.lowArr = lowA
        this.dateArr = dateA
        console.log(openA);
        console.log(closeA);
        console.log(highA);
        console.log(lowA);
        console.log(dateA);
        console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

        this.graph.data =[ 
          { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
          { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
          { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
          { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
      ]
       
      })
      .catch(console.log);
  }
}
