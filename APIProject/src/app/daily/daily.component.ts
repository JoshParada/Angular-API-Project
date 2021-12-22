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
  graphdata:any[] = [
    { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
    { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
    { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
    { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },

  ]

  lastWeek = new Date();
  pastDate = this.lastWeek.getDate() - 7;

  public dailyGraph = {
    data: this.graphdata,
    layout: { width: 620, height: 540, title: `Previous Week` }
  };

  searchDailyStock() {
    this.lastWeek.setDate(this.pastDate);

    this.stockService
      .searchDailyStock(this.symbolSearch, this.lastWeek.toISOString().slice(0, 10))
      .then((resp: any) => {
        this.results = resp.data;
        console.log(this.results)

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
