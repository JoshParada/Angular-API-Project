import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptodaily',
  templateUrl: './cryptodaily.component.html',
  styleUrls: ['./cryptodaily.component.scss']
})
export class CryptodailyComponent implements OnInit {

  constructor(private cryptoService:CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];

  searchToday(id:string){
    this.cryptoService.searchToday(id).then((resp:any) => {
      this.results[0] = resp.data;
      console.log(id,resp,this.results)
    })
  }
}
