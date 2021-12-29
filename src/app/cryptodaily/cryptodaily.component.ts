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

  searchTweet(id:string){
    this.cryptoService.searchTweet(id).then((resp:any) => {
      this.results = []
      for(let i = 0;i<5;i++){
        this.results.push(resp[i])

      }
      console.log(id,resp,this.results)
    })
  }
}
