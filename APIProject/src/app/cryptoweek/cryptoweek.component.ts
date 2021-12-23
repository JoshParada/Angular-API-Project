import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptoweek',
  templateUrl: './cryptoweek.component.html',
  styleUrls: ['./cryptoweek.component.scss']
})
export class CryptoweekComponent implements OnInit {

  constructor(private cryptoService:CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];
  today = new Date();
  lastweek = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()-7);

  searchWeek(id:string){
    this.cryptoService.searchWeek(id,this.lastweek.toISOString().slice(0, 10),this.today.toISOString().slice(0, 10)).then((resp:any) => {
      this.results[0] = resp.data;
      console.log(id,resp,this.results)
    })
  }
}
