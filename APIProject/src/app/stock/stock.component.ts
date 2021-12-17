import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService) { }

  symbolSearch: string = '';

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("working")
  }

}
