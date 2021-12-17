import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Daily } from './daily';

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

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
  displayGraph: boolean = false

  lastWeek = new Date();
  pastDate = this.lastWeek.getDate() - 7;

  public dailyGraph = {
    data: [
      { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
      { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
      { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },

    ],
    layout: { width: 620, height: 540, title: `Previous Week` }
  };

  searchDailyStock() {
    this.displayGraph = !this.displayGraph
    this.lastWeek.setDate(this.pastDate);

    if (this.displayGraph) {
      this.stockService
        .searchDailyStock(this.symbolSearch, this.lastWeek.toISOString().slice(0, 10))
        .then((resp: any) => {
          this.results = resp.data;
          for (let day of this.results) {
            this.openArr.push(day.data.open)
            this.closeArr.push(day.data.close)
            this.highArr.push(day.data.high)
            this.lowArr.push(day.data.low)
            this.dateArr.push((day.date).slice(0, 10))
          }
          console.log(this.openArr, this.dateArr);

        })
        .catch(console.log);
    }

  }

}
