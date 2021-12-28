import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptolatest',
  templateUrl: './cryptolatest.component.html',
  styleUrls: ['./cryptolatest.component.scss']
})
export class CryptolatestComponent implements OnInit {

  public barGraph = {
    data: [
      { x: ['1', '2', '3'], y: [2, 2, 2], name: 'Open Price', type: 'bar', mode: 'lines+points', marker: { color: 'blue' } },
      ],
    layout: { width: 580, height: 540, title: `Previous Week` }
  };

  constructor(private cryptoService:CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];
  graphResults: any[] = [];

  searchCurrent(id:string){
    this.cryptoService.searchCurrent(id).then((resp:any) => {
      this.results = []
      this.results.push(resp)
      console.log(id,resp,this.results)
    })
  }

  searchToday(id:string){
    this.cryptoService.searchToday(id).then((resp:any) => {
      this.graphResults = []
      this.graphResults.push(resp)
      console.log(id,resp,this.graphResults)
    })
  }
}
