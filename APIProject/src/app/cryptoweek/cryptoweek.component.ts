import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptoweek',
  templateUrl: './cryptoweek.component.html',
  styleUrls: ['./cryptoweek.component.scss']
})
export class CryptoweekComponent implements OnInit {

  public weekGraph = {
    data: [
      { x: ['1', '2', '3'], y: [2, 2, 2], name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
      { x: ['1', '2', '3'], y: [3, 3, 3], name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
      { x: ['1', '2', '3'], y: [4, 4, 4], name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: ['1', '2', '3'], y: [5, 5, 5], name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
    ],
    layout: { width: 620, height: 540, title: `Previous Week` }
  };

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];
  openArr: number[] = []
  highArr: number[] = []
  lowArr: number[] = []
  closeArr: number[] = []
  dateArr: string[] = []
  today = new Date();
  lastweek = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7);

  searchWeek(id: string) {
    this.cryptoService.searchWeek(id, this.lastweek.toISOString().slice(0, 10), this.today.toISOString().slice(0, 10)).then((resp: any) => {
      this.results = []
      this.results.push(resp);
      console.log(id,resp,this.results)

      let openA = []
      let closeA = []
      let highA = []
      let lowA = []
      let dateA = []
      this.openArr = []
      this.closeArr = []
      this.highArr = []
      this.lowArr = []
      this.dateArr = []

      for (let day of this.results[0]) {
        openA.push(day.open)
        closeA.push(day.close)
        highA.push(day.high)
        lowA.push(day.low)
        dateA.push((day.time_open).slice(0, 10))
      }

      this.openArr = openA
      this.closeArr = closeA
      this.highArr = highA
      this.lowArr = lowA
      this.dateArr = dateA

      //console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

      this.weekGraph.data = [
        { x: this.dateArr, y: this.openArr, name: 'Open Price', type: 'scatter', mode: 'lines+points', marker: { color: 'blue' } },
        { x: this.dateArr, y: this.closeArr, name: 'Close Price', type: 'scatter', mode: 'lines+points', marker: { color: 'orange' } },
        { x: this.dateArr, y: this.lowArr, name: 'Low Price', type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
        { x: this.dateArr, y: this.highArr, name: 'High Price', type: 'scatter', mode: 'lines+points', marker: { color: 'green' } },
      ]
    })
  }
}
