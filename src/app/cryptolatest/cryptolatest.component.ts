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
  graphResults: any[] = [];

  searchCurrent(id:string){
    this.cryptoService.searchCurrent(id).then((resp:any) => {
      this.results = []
      this.results.push(resp)
      console.log(id,resp,this.results)
    })
  }
}
