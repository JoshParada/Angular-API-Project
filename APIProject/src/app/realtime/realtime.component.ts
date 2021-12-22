import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Daily } from '../daily/daily';

@Component({
  selector: 'realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

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
  today = new Date();

  public realtimeGraph = {
    data: [
      { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
      { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
      { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },

    ],
    layout: { width: 620, height: 540, title: `Today` }
  };

  searchHourly() {
    this.stockService
      .searchHourly(this.symbolSearch, this.today.toISOString().slice(0, 10))
      .then((resp: any) => {
        this.results = resp.data;
        console.log(this.results)

        for (let hour of this.results) {
          this.openArr.push(hour.data.open)
          this.closeArr.push(hour.data.close)
          this.highArr.push(hour.data.high)
          this.lowArr.push(hour.data.low)
          this.dateArr.push((hour.date).slice(11, 19))
        }
        console.log(this.openArr, this.dateArr);
      })
      .catch(console.log);
  }
}
