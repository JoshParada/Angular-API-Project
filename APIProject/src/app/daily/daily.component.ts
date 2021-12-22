import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
//import * as Plotly from 'plotly.js';
import { StockService } from '../stock.service';
import { Daily } from './daily';
declare const Plotly: { newPlot: (arg0: any, arg1: any[], arg2: { title: string; xaxis: { title: string; showgrid: boolean; zeroline: boolean; }; yaxis: { title: string; showline: boolean; }; }) => void; };

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  @ViewChild('dailyGraph', { static: false })
  graphcontainer!: ElementRef;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  graphDiv = document.getElementById('Graph')

  data = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }];

  layout = {
    title: 'Sales Growth',
    xaxis: {
      title: 'Year',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Percent',
      showline: false
    }
  };


  @Input() symbolSearch: string = ''
  results: Daily[] = [];
  openArr: number[] = []
  highArr: number[] = []
  lowArr: number[] = []
  closeArr: number[] = []
  dateArr: string[] = []

  graphdata: any[] = [
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
        //console.log(this.results)

        // this.openArr.length = 0
        // this.highArr.length = 0
        // this.lowArr.length = 0
        // this.closeArr.length = 0
        // this.dateArr.length = 0

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

        console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);
        console.log(this.graphcontainer)
        console.log(this.graphdata)

        //this.graphdata = [];
        if(this.graphcontainer){
          Plotly.newPlot(this.graphcontainer.nativeElement, this.graphdata, this.layout);

        }

      })
      .catch(console.log);
  }
}
