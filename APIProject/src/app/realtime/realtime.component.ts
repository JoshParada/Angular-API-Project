import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Daily } from '../daily/daily';

@Component({
  selector: 'realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

  public realtimeGraph = {
    data: [
      { x: ['1', '2', '3'], y: [2, 2, 2], name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
      { x: ['1', '2', '3'], y: [3, 3, 3], name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
      { x: ['1', '2', '3'], y: [4, 4, 4], name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: ['1', '2', '3'], y: [5, 5, 5], name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
    ],
    layout: { width: 620, height: 540, title: `Today` }
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
  today = new Date();

  searchHourly() {

    this.stockService
      .searchHourly(this.symbolSearch, this.today.toISOString().slice(0, 10))
      .then((resp: any) => {
        this.results = resp.data;
        //console.log(this.results)

        let openA = []
        let closeA = []
        let highA = []
        let lowA = []
        let dateA = []

        for (let hour of this.results) {
          openA.push(hour.data.open)
          closeA.push(hour.data.close)
          highA.push(hour.data.high)
          lowA.push(hour.data.low)
          dateA.push((hour.date).slice(11, 19))
        }

        this.openArr = openA
        this.closeArr = closeA
        this.highArr = highA
        this.lowArr = lowA
        this.dateArr = dateA

        console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

        this.realtimeGraph.data = [
          { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
          { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
          { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
          { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
        ]
      })
      .catch(console.log);
  }
}
