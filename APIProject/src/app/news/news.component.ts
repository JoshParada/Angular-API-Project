import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private stockService:StockService) { }

  ngOnInit(): void {
  }

  @Input() symbolSearch:string=''
  results: any[] = [];
  displayNews:boolean=false

  searchNews(){
    this.displayNews = !this.displayNews
    
    this.stockService.searchNews(this.symbolSearch).then((resp:any) => {
      this.results = resp.data;
      console.log(this.results)
    })
  } 

}
