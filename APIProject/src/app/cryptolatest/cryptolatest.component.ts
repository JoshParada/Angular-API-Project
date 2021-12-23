import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptolatest',
  templateUrl: './cryptolatest.component.html',
  styleUrls: ['./cryptolatest.component.scss']
})
export class CryptolatestComponent implements OnInit {

  constructor(private cryptoService:CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];

  searchCurrent(id:string){
    this.cryptoService.searchCurrent(id).then((resp:any) => {
      this.results[0] = resp.data;
      console.log(id,resp,this.results)
    })
  }
}
