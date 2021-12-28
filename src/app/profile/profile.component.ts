import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Profile } from './profile';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private stockService:StockService) { }

  ngOnInit(): void {
  }

  @Input() symbolSearch:string=''
  results: Profile[] = [];

  searchProfile(){
    this.stockService.searchProfile(this.symbolSearch).then((resp:any) => {
      this.results = resp.data;
      console.log(this.results)
    })
  } 

  
}